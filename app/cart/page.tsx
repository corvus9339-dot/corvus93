"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    items,
    totalItems,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "24px" }}>
          Кошик
        </h1>

        {items.length === 0 ? (
          <p>У кошику поки нічого немає.</p>
        ) : (
          <>
            <div style={{ display: "grid", gap: "16px", marginBottom: "24px" }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    background: "#111",
                    borderRadius: "16px",
                    padding: "14px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "90px",
                      height: "90px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button onClick={() => decreaseItem(item.id)} style={smallButton}>
                      -
                    </button>

                    <span style={{ minWidth: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>

                    <button onClick={() => increaseItem(item.id)} style={smallButton}>
                      +
                    </button>
                  </div>

                  <button onClick={() => removeItem(item.id)} style={deleteButton}>
                    Видалити
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#111",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <p style={{ marginBottom: "16px" }}>Товарів у кошику: {totalItems}</p>

              <button onClick={clearCart} style={clearButton}>
                Очистити кошик
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

const smallButton: React.CSSProperties = {
  width: "28px",
  height: "28px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};

const deleteButton: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: "10px",
  border: "none",
  background: "#2a2a2a",
  color: "#fff",
  cursor: "pointer",
};

const clearButton: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "#ff4da6",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};