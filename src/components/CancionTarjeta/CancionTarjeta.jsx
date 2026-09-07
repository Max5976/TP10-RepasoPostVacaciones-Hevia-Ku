import './CancionTarjeta.css';

function TarjetaCancion({ cancion }) {
    return (
        <div className="tarjeta-cancion">

            <h3>{cancion.name}</h3>

            <p>{cancion.artist}</p>

            <p>{cancion.listeners} oyentes</p>

        </div>
    );
}

export default TarjetaCancion;