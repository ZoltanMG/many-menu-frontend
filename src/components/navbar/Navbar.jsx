import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="contenedor-nav">
                <h2>Many Menú</h2>
                <div className='rutas'>
                    <Link className="link-nav" to="/recetas/mis-recetas">Recetas</Link> | {" "}
                    <Link className="link-nav" to="/mi-menu">Mi menú</Link>
                </div>
            </div>
        </nav>
    );
}