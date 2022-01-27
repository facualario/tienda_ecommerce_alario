import react from "react";
import NavBar from "./NavBar.css"
import imgSrc from "./logo.png"
import CartWidget from "./CartWidget"


function navBar () {
    return <>

        <header className="navBar">
       
            <a className="logo">
                <img src={imgSrc} alt=""/>

            </a>
            
            <nav >
                <ul>          
                    <li><button>Categorías</button></li>
                    <li><button>Promociones</button></li>
                    <CartWidget/>
                    <li><button className="login">Log in</button></li>

                </ul>
            </nav>

        </header>

      </>
}

export default navBar