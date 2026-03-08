"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {

  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"20px 40px",
      borderBottom:"1px solid #222"
    }}>

      <Link href="/">
        <h2>Corvus</h2>
      </Link>

      <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>

        <Link href="/catalog">
          Каталог
        </Link>

        <Link href="/profile">
          Про нас
        </Link>

        <Link href="/cart">
          🛒 {totalItems}
        </Link>

      </nav>

    </header>
  );
}