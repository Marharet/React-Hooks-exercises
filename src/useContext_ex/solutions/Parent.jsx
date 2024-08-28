import React, {createContext} from "react";
import Child from "./Child";

const StringContext = createContext();
const contextState = "I love monkeys!";


export default function Parent(){

    return(
       <StringContext.Provider value={contextState}>
            <Child />
       </StringContext.Provider>
    );
};

export {StringContext};