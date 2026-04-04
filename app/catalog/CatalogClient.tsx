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
        transition: "0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(255, 77, 166, 0.15)";
        e.currentTarget.style.border = "1px solid #ff4da6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.border = "1px solid #1f1f1f";
      }}
    >
      <a
        href={currentImage}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "240px",
            borderRadius: "12px",
            overflow: "hidden",
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
            }}
          >
            {item.variants.map((variant, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    border: isActive
                      ? "1px solid #ff4da6"
                      : "1px solid #2b2b2b",
                    background: isActive ? "#2a1020" : "#181818",
                    color: "#fff",
                    cursor: "pointer",
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
            marginTop: "10px",
          }}
        >
          {item.price} грн
        </div>

        <div style={{ marginTop: "10px" }}>
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
        <h1 style={{ fontSize: "40px", fontWeight: 800 }}>
          Каталог Corvus
        </h1>

        {categories.map((category) => (
          <section key={category.title} style={{ marginTop: "40px" }}>
            <h2 style={{ marginBottom: "20px" }}>{category.title}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
              }}
            >
              {category.items.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}