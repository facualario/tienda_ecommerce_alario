import react from "react";
import ItemCount from './ItemCount';


function onAddItem(itemCount){
    console.log(itemCount)
}


function itemListContainer ({greetings}){
    return <>
        <div>
        <h2>Listado de productos</h2>
        <p>{greetings}</p>

        <ItemCount stock={8} initial={0} onAdd={onAddItem}/>

        </div>


    </>
}

export default itemListContainer