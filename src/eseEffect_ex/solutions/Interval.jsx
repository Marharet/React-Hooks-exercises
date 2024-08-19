import React, {useState, useEffect } from "react";

export default function Interval(){

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            console.log("Interval says hello!");
        }, 1000)

        return () => {
            clearInterval(id);
        }
    }, [])

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{setCounter((prev) => prev + 1)}}>+</button>
        </div>
    );
}