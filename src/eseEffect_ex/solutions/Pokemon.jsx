import React, { useEffect, useState } from "react";

export default function Pokemon(){
    const [img, setImg] = useState(null);

    useEffect(()=>{
       fetch("https://pokeapi.co/api/v2/pokemon/mankey")
       .then(response => response.json())
       .then(data => setImg(data.sprites.other['official-artwork'].front_default))
    }, []);

    return(
        <div>
            <h1>Mankey</h1>
            {img && <img src={img} />}
        </div>
    );
}