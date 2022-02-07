const Item = ({item}) => {
    console.log(item)
    return(
        <div style={{border:"5px solid black" , padding:"0.5rem 0.5rem"}}>
            <img src={item.img}/>
            <div>
                <h3>{item.nombre}</h3>
                <h5>Precio: {item.precio}</h5>
            </div>
        </div>
    )
}

export default Item