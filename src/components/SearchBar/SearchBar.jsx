import './SearchBar.css';

function SearchBar({ buscar, setBuscar, onBuscar }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onBuscar();
        }
    };

    return (
        <div className="search-bar">

            <input
                type="text"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar canción, artista o álbum..."
            />

            <button onClick={onBuscar}>
                Buscar
            </button>

        </div>
    );
}

export default SearchBar;
