import React, { useRef } from "react";
import MonkeyVideo from "./monkey.mp4"

export default function Video(){
    const videoRef = useRef(null);

    const enter = () => {
        videoRef.current.play();
    }

    const leave = () => {
        videoRef.current.pause();
    }

    return(
        <div>
            <video src={MonkeyVideo}
            ref={videoRef}
            onMouseEnter={enter}
            onMouseLeave={leave} />
        </div>
    );
}