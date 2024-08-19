import React, { useEffect, useState } from "react";
import Section from "./Section";

export default function Home(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Home has re-rendered");
    });

    return(
        <div>
            <h1>Visits: {count}</h1>
            <button onClick={()=>{setCount((prev)=>prev+1)}}>+</button>
            <Section/>
        </div>
    );
}