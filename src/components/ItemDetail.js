import ItemDetail from "./ItemDetail.css"

const Detail = ({item}) => {
    console.log(item)
    return(
        <div className="parent" >
            <div className="div1"><img className="detail" src={item.img}/></div>
            <div className="div2">
                <br></br>
                <h1> {item.nombre}</h1>
                <br></br>
                <br></br>
                <br></br>
                <h3>{item.descripcion}</h3>
                <br></br>
                <br></br>
                <h3>{item.precio}</h3>
            </div>
        </div>
    )
}

export default Detail