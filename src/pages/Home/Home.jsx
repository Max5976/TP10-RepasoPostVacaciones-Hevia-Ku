import { useState } from 'react';
import './Home.css';

import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import ListaCanciones from '../../components/ListaCanciones/ListaCanciones.jsx';

function Home() {

    const [canciones, setCanciones] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleBuscar() {
        // consultar API
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

                <ListaCanciones canciones={canciones}/>
            </section>

        </div>
    );
}

export default Home;