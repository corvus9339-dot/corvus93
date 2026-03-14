"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [showRaven, setShowRaven] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRaven(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {showRaven && (
        <img
          src="/raven.png"
          style={{
            position: "fixed",
            top: "25%",
            left: "-200px",
            width: "200px",
            zIndex: 9999,
            pointerEvents: "none",
            animation: "flyAcross 4s linear forwards"
          }}
        />
      )}

      <style jsx global>{`
        @keyframes flyAcross {

          0% {
            left: -200px;
            transform: scale(0.8) rotate(-10deg);
          }

          50% {
            transform: scale(1) rotate(5deg);
          }

          100% {
            left: 110%;
            transform: scale(0.9) rotate(-5deg);
          }

        }
      `}</style>

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
          Усі кошти з продажу мерчу використовуються для підтримки підрозділу
          та забезпечення бійців необхідним обладнанням.
        </p>

      </section>

    </div>
  );
}