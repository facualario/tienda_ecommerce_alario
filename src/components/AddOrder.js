import react, { useState } from "react";
import './AddOrder.css';
import { NavLink } from "react-router-dom";

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

            <NavLink to="/complete"><button >Realizar Pedido</button> </NavLink>
        </form>


    </div>
    
    )
}
    
    

export default AddOrder
