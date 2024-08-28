import React, {useContext} from "react";
import { StringContext } from "./Parent";

export default function Child(){
    const str = useContext(StringContext);
    return(
        <h1>{str}</h1>
    );
};