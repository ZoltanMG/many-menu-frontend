import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getReceta } from '../../dataCard';


import './receta.css'

export default function Receta() {
    const params = useParams();
    const receta = getReceta(parseInt(params.recetaId, 10));
    const [stringToYoutubeVideo, setStringToYoutubeVideo] = useState()
    const [favorito, setFavorito] = useState("invert(50%)");

    useEffect(() => {
        receta.favorito && setFavorito("invert(0%)")

        const getStringToYoutubeVideo = () => {
            let splitTemporal = receta.recursos.split("https://www.youtube.com/watch?v=")
            splitTemporal = splitTemporal[1].split("&")
            setStringToYoutubeVideo(splitTemporal[0])
        }
        getStringToYoutubeVideo();
    }, [receta.favorito, receta.recursos]);

    const onCahngeFavorite = () => {
        favorito === "invert(50%)" ?
            setFavorito("invert(0%)") :
            setFavorito("invert(50%)")
    }

    return (
        <main>
            <div>
                <div>
                    <div>
                        <h2>{receta.nombreReceta}</h2>
                        <h3 onClick={onCahngeFavorite} style={{ cursor: "pointer", filter: favorito }}>
                            ⭐
                        </h3>
                    </div>
                    <div>
                        <h3>Descripcion - proceso:</h3>
                        <p>{receta.descripcion}</p>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {receta.ingredientes.map((ingrediente, index) => {
                                return (<li key={index}>{ingrediente}</li>)
                            })}
                        </ul>
                        <h3>Referentes:</h3>
                        {receta.recursos &&
                            <iframe max-width="100%" style={{ border: "none" }} title="recurso"
                                src={`https://www.youtube.com/embed/${stringToYoutubeVideo}`}>
                            </iframe>
                        }
                        <h6>{receta.fechaCreacion}</h6>
                    </div>
                </div>
            </div>
        </main>
    );
}