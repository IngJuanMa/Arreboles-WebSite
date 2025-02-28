import React from "react";
import "./Nosotros.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { motion } from "framer-motion";


const lado = (delay) => {
  return {
    initial: {
      x: "-100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

const ladoiz = (delay) => {
  return {
    initial: {
      x: "100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

const Subir = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
      hidden: "hidden",
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

function Nosotros() {
  return (
    <section id="nosotros" className="S-nostros">
      <h1>Sobre Nosotros</h1>
      <div className="border"></div>

      <div className="C-uno">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "30px" }} >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="img1"
            src="cortinas.jpeg.jpg"
            alt="fotolocal" />

          <motion.img
            variants={lado(0.3)}
            initial="initial"
            whileInView="animate"
            className="img2"
            src="cielo_azul.jpeg.jpg"
            alt="fotocieloazul" />

          <motion.img
            variants={ladoiz(0.3)}
            initial="initial"
            whileInView="animate"
            className="img3"
            src="cielo_rosa.jpeg.jpg"
            alt="fotocieloazul" />

        </div>
        <div>
          <motion.h1
            variants={Subir(0.3)}
            initial="initial"
            whileInView="animate">
            Ofrecemos productos artesanales,
            deliciosos y de calidad.
          </motion.h1>

          <motion.p
            variants={Subir(0.5)}
            initial="initial"
            whileInView="animate"
          >Nuestra misión es ofrecerte la mejor experiencia a través de nuestros
            sabores únicos y un servicio rápido y eficiente.
          </motion.p>
        </div>
      </div>

      <div className="section-logo" style={{ display: "flex", alignItems: "center" }}>
        <motion.div
          variants={Subir(0.5)}
          initial="initial"
          whileInView="animate"
          className="logito" style={{ background: "var(--color-marron)", width: "80%", padding: "12px", borderRadius: "140px", display: "flex" }}>

          <motion.img
            variants={ladoiz(0.5)}
            initial="initial"
            whileInView="animate"
            src="/logodostres.png"
            alt="logoarreboles"
            style={{ width: "100%" }} />
        </motion.div>

        <motion.p
          variants={Subir(0.3)}
          initial="initial"
          whileInView="animate"
          style={{ padding: "10px", textAlign: "center" }}>
          ¡Nos encanta hacer que disfrutes cada bocado! Haz tu pedido fácilmente a través de WhatsApp.
        </motion.p>
      </div>

      <motion.p
        variants={Subir(0.3)}
        initial="initial"
        whileInView="animate">
        sigue nuestras redes sociales
      </motion.p>

      <div style={{ display: "flex", width: "50%", justifyContent: "space-evenly" }}>
        <motion.a
          variants={lado(0.3)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://www.instagram.com/gastrobar_los_arreboles?igsh=MWloa21mcHQyaW1uOQ==" target="_blank" rel="noopener noreferrer" > <FaInstagram size={30} />
        </motion.a>

        <motion.a
          variants={lado(0.5)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://www.facebook.com/profile.php?id=100093161947424" target="_blank" rel="noopener noreferrer"> <FaFacebookSquare size={30} />
        </motion.a>

        <motion.a
          variants={lado(0.7)}
          initial="initial"
          whileInView="animate"
          style={{ color: "var(--color-marron)", textDecoration: "none", cursor: "pointer" }}
          href="https://wa.me/573228611816" target="_blank" rel="noopener noreferrer"> <ImWhatsapp size={30} />
        </motion.a>
      </div>

    </section>
  );
}

export default Nosotros;
