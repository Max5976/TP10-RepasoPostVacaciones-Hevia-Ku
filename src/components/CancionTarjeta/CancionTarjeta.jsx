import './CancionTarjeta.css';

function TarjetaCancion({ cancion, esFavorito, onFavorito }) {

    const generos = [
        'rock',
        'metal',
        'pop',
        'jazz',
        'blues',
        'classical',
        'electronic',
        'electronica',
        'rap',
        'hip hop',
        'punk',
        'indie',
        'country',
        'reggae',
        'soul',
        'funk',
        'folk',
        'alternative'
    ];

    const tags = cancion.toptags?.tag || [];

    const generoEncontrado = tags.find(tag =>
        generos.includes(tag.name.toLowerCase())
    );

    const genero = generoEncontrado?.name;

    const album = cancion.album?.title;

    let claseEstilo = 'genero-default';

    if (genero) {

        const generoMinuscula = genero.toLowerCase();

        if (generoMinuscula === 'rock') {
            claseEstilo = 'genero-rock';
        }
        else if (generoMinuscula === 'metal') {
            claseEstilo = 'genero-metal';
        }
        else if (generoMinuscula === 'pop') {
            claseEstilo = 'genero-pop';
        }
        else if (generoMinuscula === 'jazz') {
            claseEstilo = 'genero-jazz';
        }
        else if (
            generoMinuscula === 'electronic' ||
            generoMinuscula === 'electronica'
        ) {
            claseEstilo = 'genero-electronica';
        }
        else if (
            generoMinuscula === 'rap' ||
            generoMinuscula === 'hip hop'
        ) {
            claseEstilo = 'genero-rap';
        }
        else if (generoMinuscula === 'punk') {
            claseEstilo = 'genero-punk';
        }
        else if (generoMinuscula === 'indie') {
            claseEstilo = 'genero-indie';
        }
        else {
            claseEstilo = 'genero-otro';
        }
    }

    const artista = typeof cancion.artist === 'object'
        ? cancion.artist.name
        : cancion.artist;

    return (
        <div className={`tarjeta-cancion ${claseEstilo}`}>

            <h3>{cancion.name}</h3>

            <p>{artista}</p>

            <p>{cancion.listeners} oyentes</p>

            {genero ? (
                <p>Género: {genero}</p>
            ) : album ? (
                <p>Álbum: {album}</p>
            ) : (
                <p>Álbum y género no disponibles</p>
            )}

            <button
                className="boton-favorito"
                onClick={() => onFavorito(cancion)}
            >
                {esFavorito
                    ? '★ Quitar de favoritos'
                    : '☆ Agregar a favoritos'}
            </button>

        </div>
    );
}

export default TarjetaCancion;