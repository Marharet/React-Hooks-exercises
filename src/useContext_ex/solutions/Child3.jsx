import React, { useContext } from "react";
import { CounterContext } from "./Parent3";


export default function Child3(){
    const dispatchCounter = useContext(CounterContext);

    function countDis(){
        dispatchCounter({type: "UP", value: 1})
    }

    return(
        <button onClick={countDis}>Go up</button>
    );
};