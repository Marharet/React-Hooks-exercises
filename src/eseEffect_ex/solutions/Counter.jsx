import React, { useState, useEffect } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    useEffect(() => {
        console.log("Counter state changed");
    }, [counter]);

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    );
}