import Link from "next/link";

export default function Home() {

  return (
  <div
  style={{
    padding: "40px",
    minHeight: "100vh",
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>

      <section style={{marginTop:"40px"}}>

        <h1 style={{fontSize:"42px"}}>
          Corvus Merch
        </h1>

        <p style={{marginTop:"20px",maxWidth:"600px"}}>
          Мерч підрозділу Corvus створений для підтримки
          бійців та збору коштів на потреби підрозділу.
          Купуючи наш мерч — ви допомагаєте забезпечувати
          підрозділ необхідним спорядженням.
        </p>

        <div style={{marginTop:"30px",display:"flex",gap:"20px"}}>

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

      <section style={{marginTop:"60px"}}>

        <h2>100% прибутку йде на підтримку підрозділу</h2>

        <p style={{marginTop:"15px",maxWidth:"600px"}}>
          Усі кошти з продажу мерчу використовуються для
          закупівлі спорядження, техніки та необхідного
          обладнання для бійців.
        </p>

      </section>

    </div>
  );
}
<img 
  src="/unit.jpg" 
  style={{marginTop:"40px",width:"100%",maxWidth:"700px",borderRadius:"12px"}} 
/>