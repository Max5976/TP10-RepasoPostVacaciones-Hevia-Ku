import { useState } from 'react';
import {
    buscarCanciones,
    obtenerInformacionCancion
} from "../../services/musicaAPI.js";

import './Home.css';

import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import ListaCanciones from '../../components/ListaCanciones/ListaCanciones.jsx';

function Home() {

    const [canciones, setCanciones] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleBuscar() {
        if (!buscar.trim()) {
            return;
        }

        try {
            setLoading(true);

            const resultados = await buscarCanciones(buscar);

            const cancionesCompletas = await Promise.all(
                resultados.map(cancion =>
                    obtenerInformacionCancion(cancion)
                )
            );

            setCanciones(cancionesCompletas);

        }
        catch (error) {
            console.error('Error al buscar canciones:', error);
            setCanciones([]);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="home">

            <section className="seccion-busqueda">
                <h1>Explorá música</h1>

                <p>Buscá canciones, artistas y álbumes.</p>

                <SearchBar
                    buscar={buscar}
                    setBuscar={setBuscar}
                    onBuscar={handleBuscar}
                />
            </section>

            <section className="seccion-resultados">
                <h2>Resultados</h2>

                {loading ? (
                    <p>Cargando canciones...</p>
                ) : (
                    <ListaCanciones canciones={canciones} />
                )}

            </section>

        </div>
    );
}

export default Home;