import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "16px",
          }}
        >
          Corvus 93
        </h1>

        <p
          style={{
            color: "#b3b3b3",
            marginBottom: "32px",
            fontSize: "18px",
          }}
        >
          Мерч підрозділу
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/catalog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "180px",
              minHeight: "48px",
              padding: "14px 20px",
              borderRadius: "12px",
              background: "#ff4da6",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              position: "relative",
              zIndex: 2,
              touchAction: "manipulation",
            }}
          >
            Перейти в каталог
          </Link>

          <Link
            href="/cart"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "180px",
              minHeight: "48px",
              padding: "14px 20px",
              borderRadius: "12px",
              background: "#1a1a1a",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid rgba(255,255,255,0.12)",
              position: "relative",
              zIndex: 2,
              touchAction: "manipulation",
            }}
          >
            Відкрити кошик
          </Link>
        </div>
      </div>
    </main>
  );
}