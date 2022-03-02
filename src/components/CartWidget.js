import React, { useContext } from "react";
import imgSrc from "./cart.png"
import { CartContext } from "../context/CartContext";




function CartWidget (){
    const {cart} = useContext(CartContext)
    return <>

    <li><button className="carrito"><img src={imgSrc} alt=""/> {cart.length} </button></li>

    </>
}

export default CartWidget