import { NextResponse } from "next/server";

type OrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
};

type OrderBody = {
  customer: {
    name: string;
    phone: string;
    comment?: string;
  };
  items: OrderItem[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as OrderBody;
    const { items, customer } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items" }, { status: 400 });
    }

    if (!customer?.name?.trim() || !customer?.phone?.trim()) {
      return NextResponse.json(
        { error: "Ім’я і телефон обов’язкові" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Telegram env variables not found" },
        { status: 500 }
      );
    }

    let text = "🛒 НОВЕ ЗАМОВЛЕННЯ CORVUS\n\n";
    text += `👤 Ім’я: ${customer.name}\n`;
    text += `📞 Телефон: ${customer.phone}\n`;
    text += `💬 Коментар: ${customer.comment?.trim() || "-"}\n\n`;
    text += "📦 Товари:\n";

    items.forEach((item) => {
      text += `• ${item.name} x${item.quantity}\n`;
    });

    text += "\n📍 Надіслано з сайту Corvus93";

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

    if (!telegramRes.ok) {
      return NextResponse.json(
        { error: "Telegram send failed", details: telegramData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}