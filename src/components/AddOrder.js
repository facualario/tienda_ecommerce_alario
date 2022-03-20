import { useState } from "react";
import './AddOrder.css';

import { database } from "../firebase";

import {collection, addDoc} from "firebase/firestore"


// const enviarPedido=() =>{
//     `<div> Se realizo su pedido, en breve recibirá informacion sobre como realizar el pago y el envio de su productos <div/>`
// }

const AddOrder=() =>{
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    
    
    const handleNombreChange = event => setNombre (event.target.value)
    const handleMailChange = event => setMail (event.target.value)
    const handleDireccionChange = event => setDireccion (event.target.value)
       
    const onSubmit = (event) => {
        event.preventDefault()

        if (![nombre, mail, direccion].some(field => field ==="")){

            // Obtengo la referencial
            const addNewOrder = collection(database, "orders")
            const newOrder = {
                buyer: nombre,
                mailDirection: mail,
                direction: direccion,
                            }

           addDoc(addNewOrder, newOrder)
            
            .then(doc => {
                alert("Pedido realizado correctamente, el codigo de su pedido es " + doc.id)
            })
            .catch(error => {
                 console.log(error)
            })}
            else{

            alert("Por favor ingrese sus datos")
            }
        }
    return(
        

    <div>
        
        <h3>Procesar Orden</h3>
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
           
            <button  type="submit">Realizar Pedido</button>
        </form>


    </div>
    
    )
}


export default AddOrder
