import React, { useState } from "react";

export default function TextBox(){

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return(
        <>
            <h1>{text}</h1>
            <input type="text" onChange={handleChange} />
        </>
    );
}