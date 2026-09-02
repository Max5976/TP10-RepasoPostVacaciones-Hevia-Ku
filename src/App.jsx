import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </>
  )
}

export default App
