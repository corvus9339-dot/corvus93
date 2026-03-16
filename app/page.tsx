import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "100px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Фоновий шеврон */}
      <img
        src="/patch.png"
        alt="Corvus Patch"
        style={{
          position: "absolute",
          right: "120px",
          top: "120px",
          width: "500px",
          opacity: "0.2",
        }}
      />

      <div style={{ maxWidth: "650px" }}>
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Corvus Merch
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Мерч підрозділу Corvus створений для підтримки бійців та збору коштів
          на потреби підрозділу. Купуючи наш мерч — ви допомагаєте забезпечувати
          бійців необхідним спорядженням.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/catalog">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "white",
                color: "black",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Переглянути мерч
            </button>
          </Link>

          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Підтримати підрозділ
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeK5MeinWZmlexP6zvTTIqo9JQJ-ey1EjQ0q7awoPGr1fehFg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "white",
                color: "black",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Анкета рекрута
            </button>
          </a>
        </div>

        <h2
          style={{
            fontSize: "36px",
            marginBottom: "20px",
          }}
        >
          100% прибутку йде на підтримку підрозділу
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Усі кошти з продажу мерчу використовуються для підтримки підрозділу,
          закупівлі обладнання, дронів та необхідного спорядження для бійців.
        </p>
      </div>
    </main>
  );
}
