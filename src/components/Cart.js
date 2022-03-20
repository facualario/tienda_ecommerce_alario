import React, { memo, useContext } from "react";
import { CartContext } from "../context/CartContext";
import {  NavLink  } from "react-router-dom"




const Cart = 
    memo(() => {
    

    const {cart, vaciarCarrito, deleteItem} = useContext(CartContext);
    // console.log(cart.cantidad)
    const totalAPagar =  cart.map(item => item.precio*item.cantidad).reduce((prev, curr) => prev + curr, 0)
    
    return (
        
        <>
        
            {cart.length === 0? (
                <>
                    <h2>Aún no hay productos, volve al Home</h2>
                    <NavLink to="/"> <button>Home</button></NavLink>
                </>


                
            ) : (
                 <>
                 {cart.map((producto) =>(
                     <div >
                         <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <h3>Cantidad : {producto.cantidad} x ${producto.precio}</h3>
                            <h2>Total = {producto.cantidad*producto.precio} </h2>
                            <button className="Eliminar" onClick={() => deleteItem(producto.id)}>Eliminar Producto</button>
                        </div>
                        
                        </div>
                                            
                    
                )) }
                <button onClick={vaciarCarrito}> Vaciar Carrito</button>

                <h1>Total a pagar= {totalAPagar} </h1>
                <NavLink to="/order"><button className="Finalizar">Finalizar compra</button></NavLink>

                 </>)
                 
            }
        </>
    )
}, (oldProp , newProp) => oldProp.cart.lenght === newProp.cart.lenght )


        

export default Cart