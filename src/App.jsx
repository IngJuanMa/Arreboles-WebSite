// src/App.js
import "./App.css"
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Nosotros from './pages/Nosotros/Contacto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Header />
        <Home />
        <Menu/>
    </>
  );
}

export default App;
