"use client";

import { useCart } from "../context/CartContext";

type Props = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export default function AddToCartButton({ id, name, image, price }: Props) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id,
          name,
          image,
          price,
        })
      }
      style={{
        width: "100%",
        padding: "8px 10px",
        borderRadius: "8px",
        border: "none",
        background: "#ff4da6",
        color: "#fff",
        fontWeight: 700,
        fontSize: "13px",
        cursor: "pointer",
        marginTop: "8px",
      }}
    >
      У кошик
    </button>
  );
}