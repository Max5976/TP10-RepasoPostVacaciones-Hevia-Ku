export function obtenerFavoritos() {
    const favoritos = localStorage.getItem('favoritos');

    return favoritos ? JSON.parse(favoritos) : [];
}

function obtenerArtista(cancion) {
    return typeof cancion.artist === 'object'
        ? cancion.artist.name
        : cancion.artist;
}

export function esFavorito(cancion) {
    const favoritos = obtenerFavoritos();

    return favoritos.some(
        favorito =>
            favorito.name === cancion.name &&
            obtenerArtista(favorito) === obtenerArtista(cancion)
    );
}

export function guardarFavorito(cancion) {
    const favoritos = obtenerFavoritos();

    if (!esFavorito(cancion)) {
        favoritos.push(cancion);

        localStorage.setItem(
            'favoritos',
            JSON.stringify(favoritos)
        );
    }
}

export function eliminarFavorito(cancion) {
    const favoritos = obtenerFavoritos();

    const nuevosFavoritos = favoritos.filter(
        favorito =>
            !(
                favorito.name === cancion.name &&
                obtenerArtista(favorito) === obtenerArtista(cancion)
            )
    );

    localStorage.setItem(
        'favoritos',
        JSON.stringify(nuevosFavoritos)
    );
}