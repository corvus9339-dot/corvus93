import Image from "next/image";
import Link from "next/link";

const BANK_LINK = "https://send.monobank.ua/jar/81iXYGC7CZ";
const RECRUIT_LINK = "https://forms.gle/PVYaKGi8JPot3wxFA";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src="/products/chevron.jpg"
            alt="bg"
            fill
            priority
            style={{
              objectFit: "cover",
              opacity: 0.2,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.6))",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h1
              style={{
                fontSize: "clamp(50px, 10vw, 100px)",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              Corvus
              <br />
              Merch
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "30px",
                color: "#ccc",
              }}
            >
              Мерч підрозділу Corvus створений для підтримки бійців та збору
              коштів. Купуючи наш мерч — ви допомагаєте забезпечувати бійців
              необхідним спорядженням.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href="/catalog" style={pinkButton}>
                Переглянути мерч
              </Link>

              <a
                href={BANK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={whiteButton}
              >
                Підтримати підрозділ
              </a>

              <a
                href={RECRUIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={whiteButton}
              >
                Анкета рекрута
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const pinkButton: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: "12px",
  background: "#ff4da6",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  textAlign: "center",
  display: "inline-block",
};

const whiteButton: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: "12px",
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
  textAlign: "center",
  display: "inline-block",
};