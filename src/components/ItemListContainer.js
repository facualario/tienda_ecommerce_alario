import { react , useEffect, useState } from "react";
import ItemCount from './ItemCount';
import { getItems } from "./Productos"
import ItemList from "./ListItems"
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

function onAddItem(itemCount){
    // console.log(itemCount)
}



const ItemListContainer = ({greetings}) => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

   

    useEffect(() => {
        getItems.then((items) => {

            const productosCategoria =items.filter((producto) => {
                return producto.category === categoryName
            })
           setItems(productosCategoria)});
    }, [categoryName]);

    useEffect(() => {
        getItems.then((res) => {
           setItems(res)});
    }, []);
    
    
    return <>
        <div>
        <h2>Listado de productos</h2>
        <p>{greetings}</p>

        <ItemList items={items}/>

        
        {/* <ItemCount stock={8} initial={0} onAdd={onAddItem}/> */}

        </div>


    </>
}

export default ItemListContainer