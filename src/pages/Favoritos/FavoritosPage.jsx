import { useState } from 'react';

import TarjetaCancion from '../../components/CancionTarjeta/CancionTarjeta.jsx';

import {
    obtenerFavoritos,
    eliminarFavorito
} from '../../components/Favoritos/Favoritos.jsx';

import './FavoritosPage.css';

function FavoritosPage() {

    const [favoritos, setFavoritos] = useState(obtenerFavoritos());

    function quitarFavorito(cancion) {

        eliminarFavorito(cancion);

        setFavoritos(obtenerFavoritos());
    }

    return (
        <div className="favoritos">

            <section className="seccion-favoritos">

                <h1>★ Favoritos ★</h1>

                {favoritos.length === 0 ? (

                    <div className="sin-favoritos">
                        <p>NO HAY CANCIONES FAVORITAS</p>
                        <p>☆ Agregá canciones desde el explorador ☆</p>
                    </div>

                ) : (

                    <div className="lista-favoritos">

                        {favoritos.map((cancion, index) => (
                            <TarjetaCancion
                                key={index}
                                cancion={cancion}
                                esFavorito={true}
                                onFavorito={quitarFavorito}
                            />
                        ))}

                    </div>

                )}

            </section>

        </div>
    );
}

export default FavoritosPage;