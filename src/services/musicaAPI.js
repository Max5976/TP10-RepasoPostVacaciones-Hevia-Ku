const API_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY = '6d7d2032ff922a721994bcd117f7520f';

export async function buscarCanciones(query) {
    const response = await fetch(
        `${API_URL}?method=track.search&track=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json`
    );

    if (!response.ok) {
        throw new Error('Error al consultar la API');
    }

    const data = await response.json();

    console.log('Datos recibidos:', data);

    return data.results.trackmatches.track;
}


export async function obtenerInformacionCancion(cancion) {
    const artista = typeof cancion.artist === 'object'
        ? cancion.artist.name
        : cancion.artist;

    const response = await fetch(
        `${API_URL}?method=track.getInfo&artist=${encodeURIComponent(artista)}&track=${encodeURIComponent(cancion.name)}&api_key=${API_KEY}&format=json`
    );

    if (!response.ok) {
        throw new Error('Error al obtener información de la canción');
    }

    const data = await response.json();

    return data.track;
}