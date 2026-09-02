import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                <h1>L.C.D.M</h1>
                <h2>Librería Cosmopolitana de Música</h2>
            </div>

            <nav>
                <a href="/">Inicio</a>
                <a href="/favoritos">Favoritos</a>
            </nav>
        </header>
    )
}

export default Header;