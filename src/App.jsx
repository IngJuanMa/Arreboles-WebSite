// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Nosotros from './pages/Nosotros/Contacto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Nosotros />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
