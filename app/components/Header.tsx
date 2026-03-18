"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const BANK_LINK = "https://send.monobank.ua/jar/ТУТ_ТВОЯ_БАНКА";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(5, 5, 5, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
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
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          Corvus
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <nav className="desktop-nav">
            <Link href="/catalog" style={navLink}>
              Каталог
            </Link>

            <Link href="/#about" style={navLink}>
              Про нас
            </Link>

            <a
              href={BANK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={supportLink}
            >
              Підтримати
            </a>

            <Link href="/cart" style={cartLink}>
              <span>🛒</span>
              <span>{totalItems}</span>
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Меню"
            className="mobile-menu-button"
            style={menuButton}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="mobile-menu"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "#0a0a0a",
            padding: "16px 20px 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <Link
              href="/catalog"
              style={mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Каталог
            </Link>

            <Link
              href="/#about"
              style={mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              Про нас
            </Link>

            <a
              href={BANK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={mobileSupportLink}
              onClick={() => setMenuOpen(false)}
            >
              Підтримати підрозділ
            </a>

            <Link
              href="/cart"
              style={mobileCartLink}
              onClick={() => setMenuOpen(false)}
            >
              🛒 Кошик ({totalItems})
            </Link>
          </div>
        </div>
      ) : null}

      <style>{`
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .mobile-menu-button {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: inline-flex;
          }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "16px",
};

const supportLink: React.CSSProperties = {
  color: "#111",
  background: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "16px",
  padding: "10px 14px",
  borderRadius: "12px",
};

const cartLink: React.CSSProperties = {
  color: "#fff",
  background: "#ff4da6",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "16px",
  padding: "10px 14px",
  borderRadius: "12px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
};

const menuButton: React.CSSProperties = {
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#111",
  color: "#fff",
  fontSize: "22px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
};

const mobileNavLink: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  padding: "12px 0",
};

const mobileSupportLink: React.CSSProperties = {
  color: "#111",
  background: "#fff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "17px",
  padding: "14px 16px",
  borderRadius: "14px",
  textAlign: "center",
};

const mobileCartLink: React.CSSProperties = {
  color: "#fff",
  background: "#ff4da6",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "17px",
  padding: "14px 16px",
  borderRadius: "14px",
  textAlign: "center",
};