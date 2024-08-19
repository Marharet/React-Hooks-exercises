import React, { useEffect, useState } from "react";

export default function Section(){

    const [sec, setSec] = useState(0);
    useEffect(()=>{
        const id = setInterval(()=>{
            setSec((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(id);
        }
    },[])

    useEffect(()=>{
        console.log("Section has re-rendered");
    })

    return(
        <div>
            <h2>Time on page: {sec} second(s)</h2>
        </div>
    );
}