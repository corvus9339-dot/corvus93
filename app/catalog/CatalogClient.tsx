"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "../components/AddToCartButton";

export type CatalogVariant = {
  id: string;
  label: string;
  image: string;
};

export type CatalogProduct =
  | {
      id: string;
      name: string;
      image: string;
      price: number;
      description?: string;
      type: "single";
    }
  | {
      id: string;
      name: string;
      image: string;
      price: number;
      description?: string;
      type: "grouped";
      variants: CatalogVariant[];
    };

export type CatalogCategory = {
  title: string;
  items: CatalogProduct[];
};

type Props = {
  categories: CatalogCategory[];
};

function ProductCard({ item }: { item: CatalogProduct }) {
  const isGrouped = item.type === "grouped";
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentImage = isGrouped
    ? item.variants[selectedIndex]?.image || item.image
    : item.image;

  const currentLabel = isGrouped ? item.variants[selectedIndex]?.label : null;

  const cartId = isGrouped
    ? `${item.id}-${item.variants[selectedIndex]?.id || "default"}`
    : item.id;

  const cartName =
    isGrouped && currentLabel ? `${item.name} — ${currentLabel}` : item.name;

  return (
    <div
      style={{
        width: "280px",
        minWidth: "280px",
        background: "#111",
        borderRadius: "16px",
        padding: "14px",
        border: "1px solid #1f1f1f",
        flexShrink: 0,
      }}
    >
      <a
        href={currentImage}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textDecoration: "none",
        }}
        title="Відкрити фото у повному розмірі"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "240px",
            borderRadius: "12px",
            overflow: "hidden",
            margin: "0 auto",
            cursor: "zoom-in",
            background: "#0d0d0d",
            border: "1px solid #1b1b1b",
          }}
        >
          <Image
            src={currentImage}
            alt={cartName}
            fill
            style={{
              objectFit: "contain",
              padding: "10px",
            }}
          />
        </div>
      </a>

      <div style={{ paddingTop: "14px" }}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 700,
            textAlign: "center",
            minHeight: "42px",
            lineHeight: 1.3,
          }}
        >
          {item.name}
        </div>

        {item.description && (
          <div
            style={{
              textAlign: "center",
              color: "#aaa",
              fontSize: "12px",
              lineHeight: 1.4,
              minHeight: isGrouped ? "36px" : "54px",
              marginTop: "8px",
            }}
          >
            {item.description}
          </div>
        )}

        {isGrouped && item.variants.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            {item.variants.map((variant, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    padding: "7px 11px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#fff",
                    border: isActive
                      ? "1px solid #ff4da6"
                      : "1px solid #2b2b2b",
                    background: isActive ? "#2a1020" : "#181818",
                    cursor: "pointer",
                    transition: "0.2s ease",
                  }}
                >
                  {variant.label}
                </button>
              );
            })}
          </div>
        )}

        <div
          style={{
            textAlign: "center",
            color: "#ff4da6",
            fontWeight: 700,
            fontSize: "16px",
            marginTop: "8px",
          }}
        >
          {item.price} грн
        </div>

        <div style={{ marginTop: "12px" }}>
          <AddToCartButton
            id={cartId}
            name={cartName}
            image={currentImage}
            price={item.price}
          />
        </div>
      </div>
    </div>
  );
}

export default function CatalogClient({ categories }: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "10px" }}>
          Каталог Corvus
        </h1>

        <p style={{ color: "#aaa", marginBottom: "40px" }}>
          Наш мерч та символіка
        </p>

        {categories.map((category) => (
          <section key={category.title} style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "20px",
                borderLeft: "4px solid #ff4da6",
                paddingLeft: "10px",
              }}
            >
              {category.title}
            </h2>

            {category.items.length === 0 ? (
              <p style={{ color: "#777" }}>Поки немає товарів</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  overflowX: "auto",
                  paddingBottom: "8px",
                  scrollBehavior: "smooth",
                }}
              >
                {category.items.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}