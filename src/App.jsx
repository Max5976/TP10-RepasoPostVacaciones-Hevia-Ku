import './App.css';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import FavoritosPage from './pages/Favoritos/FavoritosPage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

    const esFavoritos = window.location.pathname === '/favoritos';

    return (
        <>
            <Header />

            <main>
                {esFavoritos ? <FavoritosPage /> : <Home />}
            </main>

            <Footer />
        </>
    );
}

export default App;