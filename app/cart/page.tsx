"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const PAYPAL_LINK = process.env.NEXT_PUBLIC_PAYPAL_LINK || "";

export default function CartPage() {
  const {
    items,
    totalItems,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleOrder = async () => {
    if (items.length === 0) {
      setMessage("Кошик порожній");
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setMessage("Вкажи ім’я і телефон");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/telegram-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            name,
            phone,
            comment,
          },
          items,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setMessage(
          data?.details?.description ||
            data?.error ||
            "Не вдалося відправити замовлення"
        );
        return;
      }

      setMessage("Замовлення відправлено в Telegram ✅");
      clearCart();
      setName("");
      setPhone("");
      setComment("");
    } catch (error) {
      setMessage("Помилка з'єднання із сервером");
    } finally {
      setLoading(false);
    }
  };

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
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            marginBottom: "24px",
          }}
        >
          Кошик
        </h1>

        {items.length === 0 ? (
          <div
            style={{
              background: "#111",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p style={{ margin: 0, color: "#bbb" }}>
              У кошику поки нічого немає.
            </p>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
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
                    flexWrap: "wrap",
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

                  <div style={{ flex: 1, minWidth: "140px" }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "18px",
                        marginBottom: "6px",
                      }}
                    >
                      {item.name}
                    </div>

                    <div
                      style={{
                        color: "#aaa",
                        fontSize: "14px",
                      }}
                    >
                      Кількість: {item.quantity}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <button
                      onClick={() => decreaseItem(item.id)}
                      style={smallButton}
                    >
                      -
                    </button>

                    <span
                      style={{
                        minWidth: "24px",
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseItem(item.id)}
                      style={smallButton}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    style={deleteButton}
                  >
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
              <p
                style={{
                  marginTop: 0,
                  marginBottom: "16px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Товарів у кошику: {totalItems}
              </p>

              <div style={{ display: "grid", gap: "12px", marginBottom: "18px" }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше ім’я"
                  style={inputStyle}
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  style={inputStyle}
                />

                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Коментар до замовлення"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button onClick={clearCart} style={clearButton}>
                  Очистити кошик
                </button>

                <button
                  onClick={handleOrder}
                  disabled={loading}
                  style={{
                    ...orderButton,
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "default" : "pointer",
                  }}
                >
                  {loading ? "Відправляємо..." : "Замовити в Telegram"}
                </button>

                {PAYPAL_LINK ? (
                  <a
                    href={PAYPAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={paypalButton}
                  >
                    Оплатити / підтримати через PayPal
                  </a>
                ) : null}
              </div>

              {message ? (
                <p
                  style={{
                    marginTop: "16px",
                    marginBottom: 0,
                    color: "#ddd",
                  }}
                >
                  {message}
                </p>
              ) : null}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "#0d0d0d",
  color: "#fff",
  outline: "none",
};

const smallButton: React.CSSProperties = {
  width: "32px",
  height: "32px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "18px",
};

const deleteButton: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "#2a2a2a",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 600,
};

const clearButton: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: "12px",
  border: "none",
  background: "#2a2a2a",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};

const orderButton: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  background: "#ff4da6",
  color: "#fff",
  fontWeight: 700,
};

const paypalButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: "12px",
  background: "#ffffff",
  color: "#111111",
  textDecoration: "none",
  fontWeight: 700,
};