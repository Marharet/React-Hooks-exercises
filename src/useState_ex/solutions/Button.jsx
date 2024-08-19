import React from "react";

export default function Button(props){

    const handleChange = () => {
        if(props.log === "Logged In"){
            props.setLog("Logged out")
        } else {
            props.setLog("Logged In")
        }
    }

    return(
        <div>
            <button onClick={handleChange}>Toggle Login</button>
        </div>
    );
}