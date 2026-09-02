import './ListaCanciones.css';

import TarjetaCancion from '../TarjetaCancion/TarjetaCancion.jsx';

function ListaCanciones({ canciones }) {
    return (
        <div className="lista-canciones">

            {canciones.map((cancion) => (
                <TarjetaCancion
                    key={cancion.id}
                    cancion={cancion}
                />
            ))}

        </div>
    );
}

export default ListaCanciones;
