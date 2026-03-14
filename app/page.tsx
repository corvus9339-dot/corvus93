import Link from "next/link";

export default function Home() {

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/bg.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000",
        color: "white"
      }}
    >

      {/* HERO */}

      <section style={{ marginTop: "40px" }}>

        <h1 style={{ fontSize: "48px", fontWeight: "700" }}>
          Corvus Merch
        </h1>

        <p style={{ marginTop: "20px", maxWidth: "600px", lineHeight: "1.6" }}>
          Мерч підрозділу Corvus створений для підтримки
          бійців та збору коштів на потреби підрозділу.
          Купуючи наш мерч — ви допомагаєте забезпечувати
          бійців необхідним спорядженням.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>

          <Link href="/catalog">
            <button className="add-cart">
              Переглянути мерч
            </button>
          </Link>

          <a
            href="https://send.monobank.ua/jar/81iXYGC7CZ"
            target="_blank"
            className="add-cart"
          >
            Підтримати підрозділ
          </a>

        </div>

      </section>


      {/* ПРО МЕРЧ */}

      <section style={{ marginTop: "80px" }}>

        <h2 style={{ fontSize: "28px" }}>
          100% прибутку йде на підтримку підрозділу
        </h2>

        <p style={{ marginTop: "15px", maxWidth: "600px", lineHeight: "1.6" }}>
          Усі кошти з продажу мерчу використовуються для
          забезпечення бійців технікою, дронами та
          необхідним спорядженням.
        </p>

      </section>


      {/* АНКЕТА РЕКРУТА */}

      <section style={{ marginTop: "120px" }}>

        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "20px"
          }}
        >
          Анкета рекрута
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          Якщо ти хочеш долучитися до підрозділу — заповни анкету.
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeK5MeinWZmlexP6zvTTIqo9JQJ-ey1EjQ0q7awoPGr1fehFg/viewform?embedded=true"
            width="100%"
            height="1800"
            style={{ border: "none" }}
            loading="lazy"
          >
            Завантаження…
          </iframe>

        </div>

      </section>

    </div>
  );
}