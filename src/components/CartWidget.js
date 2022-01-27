import react from "react";
import imgSrc from "./cart.png"


function cartWidget (){
    return <>

    <li><button className="carrito"><img src={imgSrc} alt=""/></button></li>

    </>
}

export default cartWidget