"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const BANK_LINK = "https://send.monobank.ua/jar/ТУТ_ТВОЯ_БАНКА";

export default function Header() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#050505",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "22px",
            textDecoration: "none",
          }}
        >
          Corvus
        </Link>

        <nav className="desktop-nav">
          <Link href="/catalog" style={navLink}>
            Каталог
          </Link>

          <Link href="/about" style={navLink}>
            Про нас
          </Link>

          <Link href="/cart" style={cartLink}>
            🛒 {totalItems}
          </Link>

          <a
            href={BANK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={supportButton}
          >
            Підтримати
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} style={burger}>
          ☰
        </button>
      </div>

      {open && (
        <div
          style={{
            background: "#0a0a0a",
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "grid", gap: "12px" }}>
            <Link href="/catalog" style={mobileLink} onClick={() => setOpen(false)}>
              Каталог
            </Link>

            <Link href="/about" style={mobileLink} onClick={() => setOpen(false)}>
              Про нас
            </Link>

            <Link href="/cart" style={mobileCart} onClick={() => setOpen(false)}>
              🛒 Кошик ({totalItems})
            </Link>

            <a
              href={BANK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={mobileSupport}
              onClick={() => setOpen(false)}
            >
              Підтримати підрозділ
            </a>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        }

        @media (min-width: 769px) {
          button {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};

const cartLink: React.CSSProperties = {
  background: "#ff4da6",
  padding: "8px 12px",
  borderRadius: "10px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
};

const supportButton: React.CSSProperties = {
  background: "#fff",
  color: "#111",
  padding: "8px 12px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};

const burger: React.CSSProperties = {
  background: "#111",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  width: "40px",
  height: "40px",
  fontSize: "20px",
};

const mobileLink: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
};

const mobileCart: React.CSSProperties = {
  background: "#ff4da6",
  padding: "10px",
  borderRadius: "10px",
  textDecoration: "none",
  color: "#fff",
  textAlign: "center",
  fontWeight: 700,
};

const mobileSupport: React.CSSProperties = {
  background: "#fff",
  padding: "10px",
  borderRadius: "10px",
  textDecoration: "none",
  color: "#111",
  textAlign: "center",
  fontWeight: 700,
};