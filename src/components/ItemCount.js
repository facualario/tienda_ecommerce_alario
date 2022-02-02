import react, { useState } from "react";



export default function ItemCount ({stock, initial, onAdd}){


    const [contador, setContador] = useState(initial)


    function agregar (){
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    function restar(){
        if (contador > 0 ){
            setContador(contador - 1)
        }
    }

    function addToCart(){
        onAdd(contador)
    }

    return <>
    
    <div>
        <h3>Nombre de Producto </h3>
        <p>En stock {stock} unidades</p>
        <p>{contador}</p>
        <button onClick={restar} >-</button>
        <button onClick={agregar}>+</button>
        

    </div>

    </>


}
     
