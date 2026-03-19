import Image from "next/image";
import Link from "next/link";

const BANK_LINK = "https://send.monobank.ua/jar/https://send.monobank.ua/jar/81iXYGC7CZ";
const RECRUIT_LINK = "https://https://forms.gle/a9SGAwZv1g29AA5W6";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-120px",
              bottom: "-80px",
              width: "min(90vw, 620px)",
              height: "min(90vw, 620px)",
              opacity: 0.24,
            }}
          >
            <Image
              src="/products/chevron.jpg"
              alt="Corvus background"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.9) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <h1
              style={{
                fontSize: "clamp(56px, 10vw, 110px)",
                lineHeight: 0.95,
                fontWeight: 800,
                margin: 0,
                marginBottom: "24px",
                letterSpacing: "-0.04em",
              }}
            >
              Corvus
              <br />
              Merch
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2.3vw, 28px)",
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.88)",
                margin: 0,
                marginBottom: "32px",
              }}
            >
              Мерч підрозділу Corvus створений для підтримки бійців та збору
              коштів на потреби підрозділу. Купуючи наш мерч — ви допомагаєте
              забезпечувати бійців необхідним спорядженням.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                position: "relative",
                zIndex: 5,
              }}
            >
              <Link href="/catalog" style={primaryButton}>
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
                style={whiteButtonSmall}
              >
                Анкета рекрута
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          background: "#050505",
          padding: "80px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#ff4da6",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Про нас
            </p>

            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 54px)",
                lineHeight: 1.05,
                margin: 0,
                marginBottom: "20px",
                fontWeight: 800,
              }}
            >
              100% прибутку
              <br />
              на підтримку
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "28px",
                maxWidth: "620px",
              }}
            >
              Увесь прибуток з продажу мерчу спрямовується на потреби
              підрозділу. Це не просто речі з символікою — це реальна підтримка
              бійців, спорядження та участь у спільній справі.
            </p>

            <a
              href={BANK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={whiteButton}
            >
              Підтримати підрозділ
            </a>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: "340px",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0d0d0d",
            }}
          >
            <Image
              src="/products/chevron.jpg"
              alt="Corvus chevron"
              fill
              style={{
                objectFit: "cover",
                opacity: 0.72,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.18))",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const primaryButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "54px",
  padding: "14px 24px",
  borderRadius: "14px",
  background: "#ff4da6",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  position: "relative",
  zIndex: 5,
  pointerEvents: "auto",
  touchAction: "manipulation",
};

const whiteButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "54px",
  padding: "14px 24px",
  borderRadius: "14px",
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  position: "relative",
  zIndex: 5,
  pointerEvents: "auto",
  touchAction: "manipulation",
};

const whiteButtonSmall: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "54px",
  padding: "14px 24px",
  borderRadius: "14px",
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  position: "relative",
  zIndex: 5,
  pointerEvents: "auto",
  touchAction: "manipulation",
};