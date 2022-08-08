import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './receta-card.css'


export default function RecetaCard(props) {
    const receta = props.recetaCard;
    const colorCard = receta.colorCard;
    const [favorito, setFavorito] = useState("invert(50%)");

    useEffect(() => {
        if (receta.favorito) {
            setFavorito("invert(0%)")
        }
    }, [receta.favorito]);

    const onCahngeFavorite = () => {
        if (favorito === "invert(50%)") {
            setFavorito("invert(0%)")
        } else {
            setFavorito("invert(50%)")
        }
    }
    return (
        <main className='recetacard'>
            <div className='container--receta'>
                <div className='encabezado--receta__card' style={{ backgroundColor: colorCard }}>
                    <Link className='link' key={receta.id} to={`/recetas/mis-recetas/${receta.id}`}>
                        <h2>{receta.nombreReceta}</h2>
                    </Link>
                    <h3 onClick={onCahngeFavorite} style={{ cursor: "pointer", filter: favorito }}>
                        ⭐
                    </h3>
                </div>
            </div>
        </main>
    );
}