import React from "react";
import "./Carrito.css"
import { useCarrito } from "../Context/CarritoContext";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";



const Carrito = ({ VariarCarrito }) => {
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();


    return (
        <section className="carrito">

            <div style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                <IoMdCloseCircle
                    className="botoncerrar"
                    size={35}
                    onClick={VariarCarrito} />
                <h2>🛒 Carrito de Compras</h2>
            </div>

            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <p>Tu pedido es:</p>
                    <ul>
                        {carrito.map((item) => (
                            <li key={item.id}>
                                {item.nombre} x {item.cantidad}  <br /> ${(item.precio * item.cantidad).toLocaleString()}
                                <button onClick={() => eliminarDelCarrito(item.id)}><MdDeleteForever size={30} /></button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toLocaleString()}</h3>
                    {/* <button onClick={vaciarCarrito}>🗑 Vaciar Carrito</button> */}
                </>
            )}
            <form className="formulario">
                <h3>Ingresa Tus datos</h3>
                <input placeholder="Ingresa tu Nombre" />
                <input placeholder="Dirección" />
                <button className="botonWhats">Enviar pedido por WhatssApp</button>
            </form>

        </section>
    );
};

export default Carrito;
