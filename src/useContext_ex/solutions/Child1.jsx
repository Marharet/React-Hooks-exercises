import React, {useContext} from "react";
import { StringContext } from "./Parent1";

export default function Child1(){
    const [stringState, setStringState] = useContext(StringContext);

    return(
        <>
            <h1>{stringState}</h1>
            <button onClick={()=>setStringState('Finish')}>Change text!</button>
        </>
    );
};