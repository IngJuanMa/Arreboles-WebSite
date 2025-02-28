import React from 'react'
import "./CardProduct.css"
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { useCarrito } from '../Context/CarritoContext';
import { motion } from 'framer-motion';


const CardProduct = ({ id, nombre, ingredientes, precio, imagen }) => {

    const [Contador, SetContador] = useState(1);
    const SumarContador = () => SetContador(Contador + 1);
    const RestarContador = () => SetContador(Contador > 1 ? Contador - 1 : 1);
    const PrecionUnitario = precio;
    const precioTotal = (PrecionUnitario * Contador);
    const { agregarAlCarrito } = useCarrito();
    const [mensajeAgregado, setMensajeAgregado] = useState("");


    // Función para agregar el producto al carrito
    const handleAgregarAlCarrito = () => {
        if (Contador > 0) {
            agregarAlCarrito({ id, nombre, precio: PrecionUnitario, cantidad: Contador, imagen });
            SetContador(1);
            // Mostrar mensaje de agregado
            setMensajeAgregado(`${nombre} agregado al carrito ✅`);

            // Ocultar mensaje después de 2 segundos
            setTimeout(() => setMensajeAgregado(""), 2000);
        }
    };

    return (
        <article className='CardProducto'>
            <img src={imagen} />
            <h4>{nombre}</h4>
            <p>{ingredientes}</p>
            <div className='contadorycomprar'>
                <div className='contadorProducto' >
                    <button onClick={RestarContador} className='boton'>-</button>
                    <span>{Contador}</span>
                    <button onClick={SumarContador} className='boton'>+</button>
                </div>
                <button className='boton-comprar' onClick={handleAgregarAlCarrito}>
                    <IoCartOutline size={25} />
                </button>
            </div>

            <h4>${Contador > 0 ? precioTotal.toLocaleString() : precio}</h4>

            {mensajeAgregado && (
                <motion.div
                    className="mensaje-agregado"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {mensajeAgregado}
                </motion.div>
            )}
        </article>
    )
}

export default CardProduct;