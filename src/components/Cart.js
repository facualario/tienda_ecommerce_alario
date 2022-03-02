import React, { memo, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"



const Cart = 
    memo(() => {
    const {cart, vaciarCarrito, deleteItem} = useContext(CartContext);
    // console.log(cart.cantidad)
        
    return (
        
        <>
            {cart.cantidad === 0? (
                <>
                    <h2>Aún no hay productos, volve al Home</h2>
                    <Link to="./">Home</Link>
                    
                </>
            ) : (
                 <>
                 {cart.map((producto) =>(
                     <div >
                         <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <h3>Cantidad : {producto.cantidad} x ${producto.precio}</h3>
                            <h2>Total = {producto.cantidad*producto.precio} </h2>
                            <button onClick={() => deleteItem(producto.id)}>Eliminar Producto</button>
                        </div>
                        
                        </div>
                                            
                    
                )) }
                <button onClick={vaciarCarrito}> Vaciar Carrito</button>
                <button>Finalizar compra</button>

                 </>)
                 
            }
        </>
    )
}, (oldProp , newProp) => oldProp.cart.lenght === newProp.cart.lenght )





export default Cart