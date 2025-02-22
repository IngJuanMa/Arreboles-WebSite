import React from "react";
import "./Home.css";
import { MdDeliveryDining } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import {  motion } from "framer-motion";

const Subir = (delay) => {
    return {
        initial: {
            y: "100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
};


function Home() {
    return (
        <>
            <main >
                <section className="contenedor" >
                    <div className="c-textos">
                        <motion.h1
                            variants={Subir(0.5)}
                            initial="initial"
                            whileInView="animate"
                        >¡Hola!👋 <br />
                            Bienvendos a los Arreboles Web
                        </motion.h1>

                        <motion.p
                            variants={Subir(0.7)}
                            initial="initial"
                            whileInView="animate"
                        > Aquí se come como en casa,
                            haz click en el botón comprar y disfruta nuestros
                            productos en la comodidad de tu casa.
                        </motion.p>

                        <motion.h3
                            variants={Subir(0.7)}
                            initial="initial"
                            whileInView="animate">
                            Con envío gratis
                            <MdDeliveryDining />
                        </motion.h3>

                        <motion.button
                            variants={Subir(0.6)}
                            initial="initial"
                            whileInView="animate">
                            Comprar Ahora
                            <IoCartOutline />
                        </motion.button>

                    </div>
                    {/* seccion de imágenes */}
                    <div className="c-imagenes">
                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x: -200, y: 100 }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            src="/michelada.png"
                            alt="imagen_michelada"
                            className="miche" />

                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            src="/logodos.png"
                            alt="logo_Arreboles"
                            className="logo" />

                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x: -200, y: 100 }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            src="/hambur.png"
                            alt="imagen_hamburguesa"
                            className="hambur" />
                    </div>

                    {/* fondo marron */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
                        whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="fondo" />
                </section>
            </main>
        </>
    );
}

export default Home;
