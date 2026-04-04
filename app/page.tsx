"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BANK_LINK = "https://send.monobank.ua/jar/81iXYGC7CZ";
const RECRUIT_LINK = "https://forms.gle/PVYaKGi8JPot3wxFA";

type ColorOption = "color1" | "color2";

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>("color1");

  const colorImages: Record<ColorOption, string> = {
    color1: "/patches/chevron1.jpg",
    color2: "/patches/chevron2.jpg",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src="/products/chevron.jpg"
            alt="bg"
            fill
            priority
            style={{
              objectFit: "cover",
              opacity: 0.2,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.6))",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h1
              style={{
                fontSize: "clamp(50px, 10vw, 100px)",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              Corvus
              <br />
              Merch
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "30px",
                color: "#ccc",
              }}
            >
              Мерч підрозділу Corvus створений для підтримки бійців та збору
              коштів. Купуючи наш мерч — ви допомагаєте забезпечувати бійців
              необхідним спорядженням.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link href="/catalog" style={pinkButton}>
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
                style={whiteButton}
              >
                Анкета рекрута
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          background: "#050505",
          borderTop: "1px solid #111",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              marginBottom: "14px",
              textAlign: "center",
            }}
          >
            Шеврон Corvus
          </h2>

          <p
            style={{
              color: "#bdbdbd",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 40px auto",
              lineHeight: 1.6,
              fontSize: "16px",
            }}
          >
            Один шеврон, два варіанти кольору. Оберіть потрібний варіант.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1b1b1b",
                borderRadius: "24px",
                padding: "24px",
                minHeight: "520px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "1 / 1",
                }}
              >
                <Image
                  src={colorImages[selectedColor]}
                  alt="Шеврон Corvus"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1b1b1b",
                borderRadius: "24px",
                padding: "30px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8d8d8d",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Вибір кольору
              </div>

              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  marginBottom: "14px",
                }}
              >
                Chevron
              </h3>

              <p
                style={{
                  color: "#c8c8c8",
                  lineHeight: 1.6,
                  marginBottom: "26px",
                  fontSize: "16px",
                }}
              >
                На сторінці показується один шеврон. Колір змінюється через
                кнопки нижче.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                <button
                  onClick={() => setSelectedColor("color1")}
                  style={{
                    ...colorButton,
                    ...(selectedColor === "color1" ? activeColorButton : {}),
                  }}
                >
                  Колір 1
                </button>

                <button
                  onClick={() => setSelectedColor("color2")}
                  style={{
                    ...colorButton,
                    ...(selectedColor === "color2" ? activeColorButton : {}),
                  }}
                >
                  Колір 2
                </button>
              </div>

              <a
                href={BANK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={pinkButton}
              >
                Підтримати підрозділ
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const pinkButton: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: "12px",
  background: "#ff4da6",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  textAlign: "center",
  display: "inline-block",
  border: "none",
};

const whiteButton: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: "12px",
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
  textAlign: "center",
  display: "inline-block",
};

const colorButton: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "14px",
};

const activeColorButton: React.CSSProperties = {
  border: "1px solid #ff4da6",
  background: "#1a1a1a",
  boxShadow: "0 0 0 1px #ff4da6 inset",
};