import { NextResponse } from "next/server";

type OrderItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type OrderBody = {
  customer: {
    name: string;
    phone: string;
    comment?: string;
  };
  items: OrderItem[];
  totalPrice?: number;
};

function formatDate() {
  const now = new Date();

  return now.toLocaleString("uk-UA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function generateOrderNumber() {
  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);

  return `CRV-${year}${month}${day}-${random}`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as OrderBody;
    const { items, customer, totalPrice } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "No items" },
        { status: 400 }
      );
    }

    if (!customer?.name?.trim() || !customer?.phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Ім’я і телефон обов’язкові" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID",
        },
        { status: 500 }
      );
    }

    const orderNumber = generateOrderNumber();
    const orderDate = formatDate();
    const calculatedTotal =
      totalPrice ??
      items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let itemsText = "";

    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;

      itemsText +=
        `${index + 1}. ${item.name}\n` +
        `   • ${item.quantity} шт × ${item.price} грн = ${itemTotal} грн\n`;
    });

    const text =
      `🧾 НОВЕ ЗАМОВЛЕННЯ CORVUS\n\n` +
      `🔢 Номер: ${orderNumber}\n` +
      `📅 Дата: ${orderDate}\n\n` +
      `👤 Клієнт: ${customer.name}\n` +
      `📞 Телефон: ${customer.phone}\n` +
      `💬 Коментар: ${customer.comment?.trim() || "-"}\n\n` +
      `📦 Товари:\n` +
      `${itemsText}\n` +
      `🛒 Позицій: ${items.length}\n` +
      `📍 Одиниць товару: ${items.reduce((sum, item) => sum + item.quantity, 0)}\n` +
      `💰 Загальна сума: ${calculatedTotal} грн\n\n` +
      `🌐 Надіслано з сайту Corvus93`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok || !telegramData.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Telegram send failed",
          details: telegramData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderNumber,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    );
  }
}