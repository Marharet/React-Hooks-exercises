import React, { useContext } from "react";
import { NumberContext, StringContex } from "./Parent2";

export default function Child2(){
    const name = useContext(StringContex);
    const age = useContext(NumberContext);

    return(
        <>
            <p>{name}</p>
            <p>{age}</p>
        </>
    );
}; 