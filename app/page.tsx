import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        gap: "30px",
      }}
    >
      {/* Шеврон */}
      <img
        src="/patch.png"
        alt="Corvus Patch"
        style={{
          width: "420px",
          maxWidth: "90vw",
          height: "auto",
          objectFit: "contain",
        }}
      />

      {/* Текст */}
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
            fontWeight: "bold",
          }}
        >
          CORVUS 93
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: "0.8",
            marginBottom: "30px",
          }}
        >
          Офіційний сайт підрозділу. Мерч, рекрутинг та підтримка.
        </p>

        {/* Кнопки */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/catalog">
            <button
              style={{
                padding: "12px 26px",
                borderRadius: "8px",
                border: "none",
                background: "#4da3ff",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Каталог
            </button>
          </Link>

          <Link href="/about">
            <button
              style={{
                padding: "12px 26px",
                borderRadius: "8px",
                border: "none",
                background: "#4da3ff",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Про нас
            </button>
          </Link>

          <Link href="/recruit">
            <button
              style={{
                padding: "12px 26px",
                borderRadius: "8px",
                border: "none",
                background: "#ff4444",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Анкета рекрута
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}