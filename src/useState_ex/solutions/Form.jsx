import React, { useState } from "react";

export default function Form(){
    const [first, setFirst] = useState("");
    const handleChangeFirst = (event) => {
        setFirst(event.target.value)
    }

    const [second, setSecond] = useState("");
    const handleChangeSecond = (event) => {
        setSecond(event.target.value)
    }

    const [email, setEmail] = useState("");
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }



    const [text, setText] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        setText(`Name: ${first}, ${second}. Email: ${email}`)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First name" onChange={handleChangeFirst} value={first}/>
                <input type="text" placeholder="Secont name" onChange={handleChangeSecond} value={second}/>
                <input type="email" placeholder="Email" onChange={handleChangeEmail} value={email}/>
                <button type="submit">Submit</button>
            </form>

            <h1>{text}</h1>
        </div>
    );
}