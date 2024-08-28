import React, {createContext, useState} from "react";
import Child1 from "./Child1";

const StringContext = createContext();

export default function Parent1(){
    const [stringState, setStringState] = useState('Start');

    return(
        <StringContext.Provider value={[stringState, setStringState]}>
            <Child1 />
        </StringContext.Provider>
    );
};

export {StringContext};
