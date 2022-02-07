import Item from "./Item"

const ItemList = ({items}) =>{

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {items.map((item)=>
        <Item key={item.id} item={item} width="200px"/>)}
        </div>
    )
}


export default ItemList
