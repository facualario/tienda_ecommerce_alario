import { Link } from "react-router-dom"

const Item = ({item}) => {
    // console.log(item)
    return(
        <div style={{border:"5px solid black" , padding:"0.5rem 0.5rem"}}>
            <Link to={`/producto/${item.id}`}>

                <img src={item.imagen}/>
                <div>
                    <h3>{item.nombre}</h3>
                    <h5>Precio: {item.precio}</h5>
                </div>
            </Link>
        </div>
    )
}

export default Item