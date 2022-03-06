import react, { useState } from "react";
import './AddOrder.css';
import { NavLink } from "react-router-dom";
import { database } from "../firebase";

import {collection, addDoc} from "firebase/firestore"



const AddOrder=() =>{
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [precio, setPrecio] = useState(0)
    
    const handleNombreChange = event => setNombre (event.target.value)
    const handleMailChange = event => setMail (event.target.value)
    const handleDireccionChange = event => setDireccion (event.target.value)
    const handlePrecioChange = event => setPrecio (event.target.value)

    const onSubmit = (event) => {
        event.preventDefault()

        if (![nombre, mail, direccion, precio].some(field => field ==="")){

            // Obtengo la referencial
            const addNewOrder = collection(database, "orders")
            const newOrder = {
                buyer: nombre,
                mailDirection: mail,
                direction: direccion,
                total: precio,
            }

           addDoc(addNewOrder, newOrder)
            .then(doc => {
                  console. log("Se guardo el documento correctamente", doc.id)
            })
            .catch(error => {
                 console.log(error)
            })}
            else{

            console.log("no hay nada")
            }
        }
    return(
        

    <div>
        <h1>Procesar Orden</h1>
        <form className= "form-style-7" onSubmit={onSubmit}>
            <div>
                <label>Nombre de quien realiza el pedido</label>
                <input value={nombre} onChange={handleNombreChange} type="text"/>
            </div>

            <div>
                <label>Mail</label>
                <input value={mail} onChange={handleMailChange} type="text"/>
            </div>

            <div>
                <label>Direccion</label>
                <input value={direccion} onChange={handleDireccionChange} type="text"/>
            </div>

            <div>
                <label>Precio a abonar</label>
                <input value={precio} onChange={handlePrecioChange} type="number"/>
            </div>

            <button type="submit">Realizar Pedido</button>
        </form>


    </div>
    
    )
}
    
    




export default AddOrder
