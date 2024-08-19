import React, {useState} from "react";

export default function Counter2(){
    const [count, setCount] = useState(0);

    const addTwo = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)

    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addTwo}>+</button>
        </div>
    );
}