"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#050505",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: 800,
          }}
        >
          Corvus
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/catalog"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Каталог
          </Link>

          <Link
            href="/#about"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Про нас
          </Link>

          <Link
            href="/cart"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            🛒 {totalItems}
          </Link>
        </nav>
      </div>
    </header>
  );
}