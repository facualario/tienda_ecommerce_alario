import ItemDetail from "./ItemDetail.css"
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../context/CartContext"

const Detail = ({item}) => {
    // console.log(item)

    const [ itemCount, setItemCount ]= useState();
    const {addToCart, cart} = useContext (CartContext)


    function onAddItem(newItemCount){
        // console.log(newItemCount)
        setItemCount(newItemCount);
        addToCart(newItemCount, item);

       
    }
    console.log(cart)


    return(
        <div className="parent" >
            <div className="div1"><img className="detail" src={`./.${item.imagen}`} /></div>
            <div className="div2">
                <br></br>
                <h1> {item.nombre}</h1>
                <br></br>
                <br></br>
                <br></br>
                <h3>{item.descripcion}</h3>
                <br></br>
                <br></br>
                <h3>{item.precio}</h3>
                <br></br>
                <br></br>
                { ! itemCount ? 
                <ItemCount stock={8} initial={0} onAdd={onAddItem} /> :
                <Link to={"/cart"}>Ir al carrito</Link>
                }
            </div>
        </div>
    )
}

export default Detail


// onAdd={onAddItem}