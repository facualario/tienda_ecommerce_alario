import { react, useState } from "react";



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
        <br></br>
        <p>En stock {stock} unidades</p>
        <p>{contador}</p>
        <button onClick={restar} >-</button>
        <button onClick={agregar}>+</button>
        <button onClick={addToCart} disabled={contador === 0}> Agregar al carrito</button>
        
        

    </div>

    </>


}
     
