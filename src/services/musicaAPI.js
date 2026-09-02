const API_URL = 'URL_DE_LA_API';

export async function buscarCanciones(query) {
    const response = await fetch(`${API_URL}/search?q=${query}`);

    if (!response.ok) {
        throw new Error('Error al consultar la API');
    }

    const data = await response.json();

    return data;
}