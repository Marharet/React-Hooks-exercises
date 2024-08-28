import React, {createContext} from "react";
import Child2 from "./Child2";

const StringContex = createContext();
const NumberContext = createContext();

const name = 'Margo';
const age = 20;

export default function Parent2(){
    return(
        <StringContex.Provider value={name}>
            <NumberContext.Provider value={age}>
                <Child2 />
            </NumberContext.Provider>
        </StringContex.Provider>
    );
};

export {StringContex, NumberContext};