import React, { createContext, useReducer } from "react";
import Child3 from "./Child3";

const CounterContext = createContext();

function reducer(state, action){
    switch(action.type){
        case "UP" : return state + action.value;
        default: throw new Error("Invalid action type")
    }
}

export default function Parent3(){
    const [counter, dispatchCounter] = useReducer(reducer, 0)
    return(
        <>
            <CounterContext.Provider value={dispatchCounter}>
                <h1>{counter}</h1>
                <Child3 />
            </CounterContext.Provider>
        </>
    );
};

export {CounterContext};