import { useState } from "react";
import { Cards } from "./Cards";
import { Card } from "./Card";

export function Randomcard(){
    const [card, setCard] = useState(Cards[0]);
const randomcard=()=>{
 
   let number= Math.floor(Math.random() * (34));
    setCard(Cards[number])

}

    return(
    <>
     <button onClick={randomcard}>Random</button>
    <div className="Cardlist">
        <Card text={card} />
    </div>
    </>

    )
}