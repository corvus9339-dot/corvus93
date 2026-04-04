"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  variants: {
    label: string;
    image: string;
  }[];
};

const products: Product[] = [
  {
    id: "chevron",
    name: "Шеврон Corvus",
    price: "250 грн",
    description: "Оберіть варіант кольору для шеврона.",
    variants: [
      {
        label: "pink",
        image: "/products/patches/chevron1.jpg",
      },
      {
        label: "black&white",
        image: "/products/patches/chevron2.jpg",
      },
    ],
  },
  {
    id: "keychain",
    name: "Брелок Corvus",
    price: "200 грн",
    description: "Оберіть варіант кольору для брелка.",
    variants: [
      {
        label: "Синій",
        image: "/products/keychains/blue.jpg",
      },
      {
        label: "Зелений",
        image: "/products/keychains/green.jpg",
      },{
        label: "Рожевий",
        image: "/products/keychains/pink.jpg",
      },{
        label: "Червоний",
        image: "/products/keychains/red.jpg",
      },{
        label: "Білий",
        image: "/products/keychains/white.jpg",
      },
    ],
  },
  {
    id: "tshirt",
    name: "Футболка Corvus",
    price: "900 грн",
    description: "Базова футболка підрозділу Corvus.",
    variants: [
      {
        label: "Стандарт",
        image: "/products/tshirt.jpg",
      },
    ],
  },
  {
    id: "hoodie",
    name: "Худі Corvus",
    price: "1600 грн",
    description: "Тепле худі з брендингом Corvus.",
    variants: [
      {
        label: "Стандарт",
        image: "/products/hoodie.jpg",
      },
    ],
  },
];

export default function CatalogPage() {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({
    chevron: 0,
    keychain: 0,
    tshirt: 0,
    hoodie: 0,
  });

  const handleVariantChange = (productId: string, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex,
    }));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 800,
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Каталог
        </h1>

        <p
          style={{
            color: "#bdbdbd",
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 50px auto",
            lineHeight: 1.6,
            fontSize: "16px",
          }}
        >
          У каталозі показуються всі товари. Для шеврона та брелка можна
          перемикати зображення кнопками варіантів.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => {
            const selectedIndex = selectedVariants[product.id] ?? 0;
            const currentVariant = product.variants[selectedIndex];

            return (
              <div
                key={product.id}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1b1b1b",
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    background: "#111",
                    padding: "20px",
                    minHeight: "320px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={currentVariant.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      maxWidth: "260px",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "16px",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        margin: "0 0 8px 0",
                      }}
                    >
                      {product.name}
                    </h2>

                    <div
                      style={{
                        color: "#ff4da6",
                        fontWeight: 700,
                        marginBottom: "10px",
                      }}
                    >
                      {product.price}
                    </div>

                    <p
                      style={{
                        color: "#c8c8c8",
                        lineHeight: 1.6,
                        fontSize: "15px",
                        margin: 0,
                      }}
                    >
                      {product.description}
                    </p>
                  </div>

                  {product.variants.length > 1 && (
                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#8d8d8d",
                          marginBottom: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Вибір кольору
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                        }}
                      >
                        {product.variants.map((variant, index) => (
                          <button
                            key={variant.label}
                            onClick={() =>
                              handleVariantChange(product.id, index)
                            }
                            style={{
                              ...colorButton,
                              ...(selectedIndex === index
                                ? activeColorButton
                                : {}),
                            }}
                          >
                            {variant.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button style={buyButton}>Замовити</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

const colorButton: React.CSSProperties = {
  padding: "10px 14px",
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

const buyButton: React.CSSProperties = {
  padding: "14px 18px",
  borderRadius: "12px",
  border: "none",
  background: "#ff4da6",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "15px",
  marginTop: "6px",
};