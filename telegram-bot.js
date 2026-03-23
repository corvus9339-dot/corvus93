require("dotenv").config({ path: ".env.local" });
const { Telegraf, Markup } = require("telegraf");

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error("Missing TELEGRAM_BOT_TOKEN");
}

const FORM_URL = "https://forms.gle/UzBaJEB1PF7ARQNq8";

const bot = new Telegraf(botToken);

const keyboard = Markup.inlineKeyboard([
  [Markup.button.url("📝 Анкета рекрута", FORM_URL)],
  [Markup.button.url("📸 Instagram", "https://www.instagram.com/corvus_93ombr?igsh=cXNkNmUwcnNjdTVo")],
  [Markup.button.url("🧵 Threads", "https://www.threads.com/@corvus_reserv?igshid=NTc4MTIwNjQ2YQ==")],
  [Markup.button.url("💬 WhatsApp", "https://wa.me/380737584830")],
]);

bot.start((ctx) => {
  ctx.reply(
    `Вітаємо!\n\n` +
      `Ми — підрозділ пілотів.\n` +
      `Бомбери • Розвідка • Ударні\n\n` +
      `Щоб долучитись — заповни анкету нижче 👇`,
    keyboard
  );
});

bot.launch();

console.log("Bot is running...");