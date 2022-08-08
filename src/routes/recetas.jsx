import { Outlet, NavLink } from "react-router-dom";
import "./routes.css"

export default function Recetas() {
    return (
        <main>
            <div className="mis-r-mas-r">
                <NavLink
                    className={({ isActive }) => {
                        return(
                            isActive ?
                            "type-recetas-selected":
                            "type-recetas"
                        )
                    }}
                    to={`/recetas/mis-recetas`}
                    style={{borderRadius: "9px 0px 0px 9px"}}
                >
                    Mis recetas
                </NavLink>
                <NavLink
                    className={({ isActive }) => {
                        return(
                            isActive ?
                            "type-recetas-selected":
                            "type-recetas"
                        )
                    }}
                    to={`/recetas/mas-recetas`}
                    style={{borderRadius: "0px 9px 9px 0px"}}
                >
                    Más recetas
                </NavLink>
            </div>
            <Outlet />
        </main>
    );
}