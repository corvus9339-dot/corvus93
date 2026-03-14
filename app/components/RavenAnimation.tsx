"use client";

import { useState } from "react";

export default function Raven() {

const [flap,setFlap] = useState(false)

return(

<div
onMouseEnter={()=>setFlap(true)}
onMouseLeave={()=>setFlap(false)}
className={`raven ${flap ? "flap" : ""}`}
>

<img src="/raven.png"/>

</div>

)

}