import React, { useRef } from "react";

export default function Input(){
    const inputRef = useRef(null);

    const focusMe = () => {
        inputRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusMe} >Focus</button>
        </div>
    );   
}