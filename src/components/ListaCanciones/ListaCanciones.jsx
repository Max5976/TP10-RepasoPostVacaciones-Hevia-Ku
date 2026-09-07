import './ListaCanciones.css';

import TarjetaCancion from '../CancionTarjeta/CancionTarjeta.jsx';

function ListaCanciones({ canciones }) {
    return (
        <div className="lista-canciones">

            {canciones.map((cancion, index) => (
                <TarjetaCancion
                    key={index}
                    cancion={cancion}
                />
            ))}

        </div>
    );
}

export default ListaCanciones;