import React, { useRef, useState } from "react";

export default function Form(){
    const formRef = useRef(null);
    const [data, setData] = useState("");

    const subForm = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        let text = "";

        for(const [key, value] of formData){
            text += `[${key}] : ${value}     `;
        }

        setData(text);
    }

    return(
        <div>
            <form ref={formRef} onSubmit={subForm}>
                <input placeholder="Name" name="name" type="text"/>
                <input  placeholder="Email" name="email" type="email"/>
                <input  placeholder="Age" name="age" type="number"/>
                <button type="submit">Submit</button>
            </form>
            <p>{data}</p>
        </div>
    );
}