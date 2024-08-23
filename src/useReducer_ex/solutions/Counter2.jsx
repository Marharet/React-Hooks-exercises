import React, {useReducer} from "react";
import Button from "./Button";

function reducer(prevState, action){
    switch(action.type){
        case "UP": return prevState + action.value;
        case "DOWN": return prevState - action.value;
        case "RESET": return 0;
        default: throw new Error("invalid type");
    }
}; 

export default function Counter2(){

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
            <Button handleClick={handleSum} content="+" />
            <Button handleClick={handleMinus} content="-" />
            <Button handleClick={handleReset} content="Reset" />
        </div>
    );
};