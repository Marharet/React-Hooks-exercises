import React, { useState } from "react";
import Button from "./Button";

export default function Profile(){
    const [log, setLog] = useState("Logged In");
    return(
        <div>
            <p>{log}</p>
            <Button setLog={setLog} log={log}/>

        </div>
    );
}