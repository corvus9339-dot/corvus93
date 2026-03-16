"use client";

import Link from "next/link";

export default function Home() {

return (

<div
style={{
minHeight:"100vh",
padding:"40px",
color:"white",
backgroundImage:
"linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/bg.jpg')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<h1 style={{
fontSize:"56px",
marginBottom:"20px"
}}>
CORVUS 93
</h1>

<p style={{
maxWidth:"600px",
marginBottom:"40px",
fontSize:"18px"
}}>
Офіційний сайт підрозділу.  
Мерч, рекрутинг та підтримка.
</p>

<div style={{
display:"flex",
gap:"20px"
}}>

<Link href="/catalog">
<button className="main-button">
Каталог
</button>
</Link>

<Link href="/profile">
<button className="main-button">
Про нас
</button>
</Link>

</div>

</div>

);

}