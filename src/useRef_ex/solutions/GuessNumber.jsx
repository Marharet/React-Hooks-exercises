import React, { useEffect, useRef, useState } from "react";

export default function GuessNumber(){
    const number = useRef(0);
    const [res, setRes] = useState("")
    const [inpData, setInputData] = useState("")

    useEffect(()=>{
        number.current = Math.floor(Math.random() * 10) + 1;
    }, []);

    const check = () => {
        const guess = parseInt(inpData)
        if(guess === number.current){
            setRes("You win!");
        } else if(guess > number.current){
            setRes("Too high!");
        } else setRes("Too low!");
    };


    return(
        <div>
            <input type="text" value={inpData} onChange={(event)=>setInputData(event.target.value)}/>
            <button onClick={check}>Guess!</button>
            <p>{res}</p>
        </div>
    );
}