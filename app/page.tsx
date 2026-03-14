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

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

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

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeK5MeinWZmlexP6zvTTIqo9JQJ-ey1EjQ0q7awoPGr1fehFg/viewform"
            target="_blank"
            className="add-cart"
          >
            Анкета рекрута
          </a>

        </div>

      </section>

      <section style={{ marginTop: "80px" }}>

        <h2 style={{ fontSize: "28px" }}>
          100% прибутку йде на підтримку підрозділу
        </h2>

        <p style={{ marginTop: "15px", maxWidth: "600px", lineHeight: "1.6" }}>
          Усі кошти з продажу мерчу використовуються для
          підтримки підрозділу, закупівлі обладнання,
          дронів та необхідного спорядження для бійців.
        </p>

      </section>

    </div>
  );
}
<img src="/raven.png" style={{width:"150px"}} />