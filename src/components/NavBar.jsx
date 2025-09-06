import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "../assets/img/logo.jpg";



export default function NavBar (){
    
    return (
        <>

    <div>
    <nav className="nav-bar">
        <div className="logo-container">
            <img src={logo} alt="Logo de la tienda" className="logo" />
        </div>
        <ul className="nav-links">
            <li><a href="#">Fundas</a></li>
            <li><a href="#">Cargadores</a></li>
            <li><a href="#">Quienes Somos</a></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
    </div>
    </>
    )
}