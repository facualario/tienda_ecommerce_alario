import React, { useContext } from "react";
import imgSrc from "./cart.png"
import { CartContext } from "../context/CartContext";




function CartWidget (){
    const {cart} = useContext(CartContext)
    const totalProductos = cart.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0)
    return <>

    <li><button className="carrito"><img src={imgSrc} alt=""/> {totalProductos} </button></li>

    </>
}

export default CartWidget