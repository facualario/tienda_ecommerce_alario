import { react , useEffect, useState } from "react";
import {getItems} from "./Productos";
import Detail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { itemId } = useParams();

    useEffect(() => { 
        

        getItems.then((items) => {
            const item =items.find((i) => i.id === Number(itemId));
            setItem(item);
        }).catch((error) => {
            // console.log(error)
        })
    }, [itemId]);
    
    
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {! item ? <p>Cargando Producto...</p> : <Detail item={item}/>}
        </div>)
}

export default ItemDetailContainer