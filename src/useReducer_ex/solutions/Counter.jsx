import React, { useReducer } from "react";

function reducer(prevState, action){
    switch(action.type){
        case "UP": return prevState + action.value;
        case "DOWN": return prevState - action.value;
        case "RESET": return 0;
        default: throw new Error("invalid type");
    }
}; 

export default function Counter(){
    const [count, dispatchCount] = useReducer(reducer, 0);
    const handleSum = () => {
        dispatchCount({type:"UP", value:1});
    }

    const handleMinus = () => {
        dispatchCount({type:"DOWN", value:1});
    }

    const handleReset = () => {
        dispatchCount({type:"RESET"});
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleSum}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};