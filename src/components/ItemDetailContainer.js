import { react , useEffect, useState } from "react";
import {getItems} from "./Productos";
import Detail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => { 
        const itemId=2;

        getItems.then((items) => {
            const item =items.find((i) => i.id === itemId);
            setItem(item);
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {! item ? <p>Cargando Producto...</p> : <Detail item={item}/>}
        </div>)
}

export default ItemDetailContainer