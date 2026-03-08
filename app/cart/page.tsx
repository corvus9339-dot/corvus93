"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  const handleTelegramOrder = () => {
    if (cart.length === 0) {
      alert("Кошик порожній");
      return;
    }

    const items = cart
      .map((item: any) => `${item.name} - ${item.price} грн`)
      .join("\n");

    const message = `Нове замовлення:\n\n${items}\n\nСума: ${total} грн`;

    const telegramUrl = `https://t.me/YOUR_TELEGRAM_USERNAME?text=${encodeURIComponent(
      message
    )}`;

    window.open(telegramUrl, "_blank");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Кошик</h1>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          {cart.map((item: any, index: number) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.price} грн</p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Видалити
              </button>
            </div>
          ))}

          <h2>Загальна сума: {total} грн</h2>

          <button
            onClick={clearCart}
            style={{
              marginRight: "10px",
              padding: "10px 15px",
              cursor: "pointer",
            }}
          >
            Очистити кошик
          </button>

          <button
            onClick={handleTelegramOrder}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
            }}
          >
            Замовити в Telegram
          </button>
        </>
      )}
    </div>
  );
}