// src/App.js
import "./App.css"
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Nosotros from './pages/Nosotros/Contacto';
import Footer from './Components/Footer';
import Nav from "./Components/Nav";
import Carrito from "./Components/Carrito";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function App() {

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const VariarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito); //Alternar entre mostrar y ocultar el carrito
  };

  // Bloquear el scroll cuando el carrito está abierto
  useEffect(() => {
    if (mostrarCarrito) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mostrarCarrito]);

  return (
    <>
      <Nav VariarCarrito={VariarCarrito} />
      <Home />
      <Menu />
      <AnimatePresence>
        {mostrarCarrito && <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="carrito-container"
        >
          <Carrito VariarCarrito={VariarCarrito} />
        </motion.div>}  
      </AnimatePresence>
      <Nosotros />
      <Footer/>
    </>
  );
}

export default App;
