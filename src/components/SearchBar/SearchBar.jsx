import './SearchBar.css';

function SearchBar({ buscar, setBuscar, onBuscar }) {
    return (
        <div className="search-bar">

            <input
                type="text"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                placeholder="Buscar canción, artista o álbum..."
            />

            <button onClick={onBuscar}>
                Buscar
            </button>

        </div>
    );
}

export default SearchBar;
