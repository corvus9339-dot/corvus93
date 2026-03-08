"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Corvus Футболка",
    price: 1000,
    category: "Одяг",
    image: "/products/shirt.jpg",
  },
  {
    id: 2,
    name: "Corvus Наліпки",
    price: 300,
    category: "Стікери",
    image: "/products/sticker1.jpg",
    variants: ["НРК", "Вампір", "Мавік", "ФПВ"],
  },
  {
    id: 3,
    name: "Corvus Брелок",
    price: 250,
    category: "Аксесуари",
    image: "/products/keychain.jpg" ,
    variants: ["Рожевий", "Білий", "Зелений", "Червоний","Синій"],
  },
  {
    id: 4,
    name: "Corvus Прапор",
    price: 900,
    category: "Прапори",
    image: "/products/flag.jpg",
  },
  {
    id: 5,
    name: "Corvus Шеврон",
    price: 300,
    category: "Шеврони",
    image:"/products/chevron.jpg",
  },
];

export default function Catalog() {
  const { addToCart } = useCart();

  const [selectedVariants, setSelectedVariants] = useState<{[key:number]:string}>({});

  const handleVariantChange = (productId:number, variant:string) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variant,
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Каталог</h1>

      <div className="products-grid">

        {products.map((item) => (

          <div className="product-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="product-category">
              {item.category}
            </div>

            <div className="product-title">
              {item.name}
            </div>

            <div className="product-price">
              {item.price} грн
            </div>

            {item.variants && (
              <select
                style={{ marginTop: "10px" }}
                onChange={(e) =>
                  handleVariantChange(item.id, e.target.value)
                }
              >
                {item.variants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
            )}

            <button
              className="add-cart"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name:
                    item.name +
                    (selectedVariants[item.id]
                      ? ` (${selectedVariants[item.id]})`
                      : ""),
                  price: item.price,
                })
              }
            >
              В кошик
            </button>

          </div>

        ))}

      </div>
    </div>
  );
}