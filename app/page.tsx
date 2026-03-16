import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        padding: "120px 40px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        CORVUS 93
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "40px",
          opacity: "0.8",
        }}
      >
        Офіційний сайт підрозділу. Мерч, рекрутинг та підтримка.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href="/catalog">
          <button
            style={{
              padding: "12px 26px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              background: "#4da3ff",
              cursor: "pointer",
            }}
          >
            Каталог
          </button>
        </Link>

        <Link href="/about">
          <button
            style={{
              padding: "12px 26px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              background: "#4da3ff",
              cursor: "pointer",
            }}
          >
            Про нас
          </button>
        </Link>

        <Link href="/recruit">
          <button
            style={{
              padding: "12px 26px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              background: "#ff4444",
              cursor: "pointer",
            }}
          >
            Анкета рекрута
          </button>
        </Link>
      </div>
    </div>
  );
}