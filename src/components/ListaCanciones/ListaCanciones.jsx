import { useState } from 'react';

import './ListaCanciones.css';

import TarjetaCancion from '../CancionTarjeta/CancionTarjeta.jsx';

import {
    obtenerFavoritos,
    guardarFavorito,
    eliminarFavorito,
    esFavorito
} from '../Favoritos/Favoritos.jsx';

function ListaCanciones({ canciones }) {

    const [favoritos, setFavoritos] = useState(obtenerFavoritos());

    function manejarFavorito(cancion) {

        if (esFavorito(cancion)) {
            eliminarFavorito(cancion);
        } else {
            guardarFavorito(cancion);
        }

        setFavoritos(obtenerFavoritos());
    }

    return (
        <div className="lista-canciones">

            {canciones.map((cancion, index) => (
                <TarjetaCancion
                    key={index}
                    cancion={cancion}
                    esFavorito={esFavorito(cancion)}
                    onFavorito={manejarFavorito}
                />
            ))}

        </div>
    );
}

export default ListaCanciones;