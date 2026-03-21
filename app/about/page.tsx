import Link from "next/link";

const INSTAGRAM_LINK = "https://www.instagram.com/corvus_93ombr?igsh=cXNkNmUwcnNjdTVo";
const THREADS_LINK = "https://www.threads.com/@corvus_reserv?igshid=NTc4MTIwNjQ2YQ==";
const TELEGRAM_CHANNEL_LINK = "https://t.me/Corvus93";
const BANK_LINK = "https://send.monobank.ua/jar/81iXYGC7CZ";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        padding: "48px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#ff4da6",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}
        >
          Corvus
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 0,
            marginBottom: "24px",
          }}
        >
          Про підрозділ
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.86)",
            marginBottom: "18px",
            maxWidth: "820px",
          }}
        >
          Corvus — це підрозділ, який працює заради ефективності, дисципліни та
          реального результату. Наш мерч створений не лише як символіка, а як
          спосіб підтримати бійців та закрити актуальні потреби підрозділу.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.86)",
            marginBottom: "18px",
            maxWidth: "820px",
          }}
        >
          Увесь прибуток із продажу мерчу спрямовується на потреби підрозділу:
          спорядження, витратні матеріали, технічне забезпечення та інші
          важливі напрямки, які напряму впливають на роботу команди.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.86)",
            marginBottom: "32px",
            maxWidth: "820px",
          }}
        >
          Тут ти можеш не тільки придбати мерч, а й стежити за нами в соцмережах
          та підтримати підрозділ напряму.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "42px",
          }}
        >
          <a
            href={BANK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButton}
          >
            Підтримати підрозділ
          </a>

          <Link href="/catalog" style={secondaryButton}>
            Перейти в каталог
          </Link>
        </div>

        <section
          style={{
            background: "#111",
            borderRadius: "20px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            Наші посилання
          </h2>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={linkCard}
            >
              Instagram
            </a>

            <a
              href={THREADS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={linkCard}
            >
              Threads
            </a>

            <a
              href={TELEGRAM_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={linkCard}
            >
              Telegram-канал
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

const primaryButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 20px",
  borderRadius: "14px",
  background: "#ff4da6",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 20px",
  borderRadius: "14px",
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
};

const linkCard: React.CSSProperties = {
  display: "block",
  padding: "16px 18px",
  borderRadius: "14px",
  background: "#0d0d0d",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(255,255,255,0.08)",
};