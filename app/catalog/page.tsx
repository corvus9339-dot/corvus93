"use client";

import { useState } from "react";
import Link from "next/link";

export default function Catalog() {

  const flags = {
    "Небесна кара": "/flags/nebesna_kara.jpg",
    "Corvus - Холодний Яр": "/flags/corvus_holodny_yar.jpg",
    "Крила помсти": "/flags/kryla_pomsty.jpg"
  };

  const [selectedFlag, setSelectedFlag] =
    useState<keyof typeof flags>("Небесна кара");

  return (
    <div
      style={{
        padding: "60px",
        minHeight: "100vh",
        background: "black",
        color: "white"
      }}
    >

      <h1 style={{ fontSize: "48px", marginBottom: "50px" }}>
        Каталог
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px"
        }}
      >

        {/* ШЕВРОН */}

        <div style={card}>
          <img
            src="/products/patch.jpg"
            alt="Corvus Шеврон"
            style={image}
          />

          <p style={category}>Шеврони</p>

          <h3>Corvus Шеврон</h3>

          <p style={price}>300 грн</p>

          <button style={button}>
            В кошик
          </button>
        </div>


        {/* БРЕЛОК */}

        <div style={card}>
          <img
            src="/products/keychain.jpg"
            alt="Corvus Брелок"
            style={image}
          />

          <p style={category}>Аксесуари</p>

          <h3>Corvus Брелок</h3>

          <p style={price}>250 грн</p>

          <select style={select}>
            <option>Білий</option>
            <option>Рожевий</option>
            <option>Червоний</option>
            <option>Синій</option>
          </select>

          <button style={button}>
            В кошик
          </button>
        </div>


        {/* СТІКЕРПАК */}

        <div style={card}>
          <img
            src="/products/stickers.jpg"
            alt="Corvus Стікери"
            style={image}
          />

          <p style={category}>Стікери</p>

          <h3>Corvus Стікерпак</h3>

          <p style={price}>350 грн</p>

          <select style={select}>
            <option>НРК</option>
            <option>FPV</option>
            <option>Mavic</option>
            <option>Bomber</option>
          </select>

          <button style={button}>
            В кошик
          </button>
        </div>


        {/* ПРАПОР */}

        <div style={card}>
          <img
            src={flags[selectedFlag]}
            alt="Corvus Прапор"
            style={image}
          />

          <p style={category}>Прапори</p>
          <option>Крила помсти</option>
          <option>Corvus&Холодний Яр</option>
          <option>Небесна кара</option>

          <h3>Corvus Прапор</h3>

          <p style={price}>950 грн</p>

          <select
            value={selectedFlag}
            onChange={(e) =>
              setSelectedFlag(e.target.value as keyof typeof flags)
            }
            style={select}
          >
            {Object.keys(flags).map((flag) => (
              <option key={flag}>{flag}</option>
            ))}
          </select>

          <button style={button}>
            В кошик
          </button>
        </div>


        {/* ФУТБОЛКА */}

        <div style={card}>
          <img
            src="/products/shirt.jpg"
            alt="Corvus Футболка"
            style={image}
          />

          <p style={category}>Одяг</p>

          <h3>Corvus Футболка</h3>

          <p style={price}>1100 грн</p>
          <option>FPV HUNTER</option>
          <option>MAVIC UNIT</option>
          <option>NIGHT HUNTER</option>
          <option>IRON RAVENS</option>
          <button style={button}>
            В кошик
          </button>
        </div>

      </div>

      <div style={{ marginTop: "60px" }}>
        <Link href="/">
          <button style={button}>
            ← Назад
          </button>
        </Link>
      </div>

    </div>
  );
}

const card = {
  background: "#111",
  padding: "20px",
  borderRadius: "10px"
};

const image = {
  width: "100%",
  borderRadius: "8px"
};

const category = {
  marginTop: "10px",
  opacity: "0.7"
};

const price = {
  color: "#aaa"
};

const button = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "white",
  color: "black",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const select = {
  marginTop: "10px",
  padding: "8px",
  width: "100%",
  background: "#222",
  color: "white",
  border: "1px solid #444",
  borderRadius: "6px"
};