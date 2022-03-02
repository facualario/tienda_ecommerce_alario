import react from "react";
import NavBar from "./NavBar.css"
import imgSrc from "./logo.png"
import CartWidget from "./CartWidget"
import {NavLink, Link} from "react-router-dom"



function navBar () {
    return <>

        <header className="navBar">
            <NavLink to="/">
            <a className="logo">
                <img src={imgSrc} alt=""/>


            </a>
            </NavLink>
            <nav >
                <ul>          
                    <li><button><NavLink to="/category/platos">Platos</NavLink> </button></li>
                    <li><button> <NavLink to="/category/accesorios">Accesorios</NavLink></button></li>
                    <NavLink to="/cart"><CartWidget/></NavLink>
                    <li><button className="login">Log in</button></li>

                </ul>
            </nav>

        </header>

      </>
}

export default navBar