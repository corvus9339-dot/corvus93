"use client";

import { useState } from "react";
import Link from "next/link";

export default function Catalog(){

const flags = {
"Небесна кара":"/flags/nebesna_kara.jpg",
"Corvus - Холодний Яр":"/flags/corvus_holodny_yar.jpg",
"Крила помсти":"/flags/kryla_pomsty.jpg"
} as const;

type FlagKey = keyof typeof flags;

const [selectedFlag,setSelectedFlag] =
useState<FlagKey>("Небесна кара");

return(

<div
style={{
padding:"40px",
minHeight:"100vh",
background:"#05060a",
color:"white"
}}
>

<h1 style={{fontSize:"42px",marginBottom:"40px"}}>
Каталог
</h1>

<div className="products-grid">

{/* ПРАПОР */}

<div className="product-card">

<img
src={flags[selectedFlag]}
alt="Corvus прапор"
/>

<p>Прапори</p>

<h3>Corvus Прапор</h3>

<p style={{color:"#6ec1ff"}}>
900 грн
</p>

<select
value={selectedFlag}
onChange={(e)=>
setSelectedFlag(e.target.value as FlagKey)
}
>

<option>Небесна кара</option>
<option>Corvus - Холодний Яр</option>
<option>Крила помсти</option>

</select>

<button className="add-cart">
В кошик
</button>

</div>

</div>

<Link href="/">

<button style={{marginTop:"40px"}}>
⬅ Назад
</button>

</Link>

</div>

);

}