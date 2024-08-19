import React, { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const add = () => {
        setCount((prev) => prev + 1);
    }

    const minus = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
        </div>
    );
}