import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { items, customer } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "No token or chatId" });
    }

    const text = `
🛒 НОВЕ ЗАМОВЛЕННЯ

👤 Ім'я: ${customer.name}
📞 Телефон: ${customer.phone}
💬 Коментар: ${customer.comment || "-"}

📦 Товари:
${items
  .map((item: any) => `• ${item.name} x${item.quantity}`)
  .join("\n")}
`;

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

    const data = await telegramRes.json();

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Server error" });
  }
}