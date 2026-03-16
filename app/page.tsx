import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/flag.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HERO */}
      <div
        style={{
          padding: "120px 40px",
          maxWidth: "900px",
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
            opacity: "0.9",
          }}
        >
          Офіційний сайт підрозділу. Мерч, рекрутинг та підтримка.
        </p>

        {/* кнопки */}
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

      {/* PATCH */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
        }}
      >
        <img
          src="/patch.png"
          alt="Corvus Patch"
          style={{
            width: "220px",
            opacity: "0.9",
          }}
        />
      </div>
    </div>
  );
}