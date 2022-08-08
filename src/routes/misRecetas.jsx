import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import RecetaCard from '../components/receta-card/RecetaCard';

export default function MisRecetas() {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://127.0.0.1:4000/mis-recetas')
                .then(response => response.json())
            setRecetas(data)
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <article>
            <div className='receta-card-link'>
                {recetas.map((receta) => {
                    return (
                        <RecetaCard key={receta.id} recetaCard={receta} />
                    )
                })}
            </div>
            <Outlet />
        </article>
    );
}