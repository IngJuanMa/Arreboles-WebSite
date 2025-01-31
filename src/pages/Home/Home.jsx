import Carrusel from "../../Components/Carrusel/Carrusel";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {


    const imagenesEspecialidades = [
        "/Hamburg.jpeg",
        "/patacon.jpeg",
        "/dos.jpeg"
      ];

      const mazorcadas = [
        "/picada.jpeg",
        "/cielo_azul.jpeg.jpg",
        "/cortinas.jpeg.jpg"
      ];

      const Especiales = [
        "/cielo_azul.jpeg.jpg",
        "/cielo_azul.jpeg.jpg",
        "/cortinas.jpeg.jpg"
      ];

    return (
        <>
            <main>
                <img src="/blanco.png" className="logoblanco"></img>
                <h1>¡Bienvenido a nuestro sitio web!</h1>
                <p>Haz tu pedido fácilmente a través de WhatsApp.</p>
                <Link to="/menu" className="botonMenu">Ver Menú</Link>
            </main>
            <h1></h1>
            <section className="categorias">
                <h2>Nuestras Especialidades</h2>
                <p>¡Son muestra de nuestro compromiso con el buen sabor!</p>
                <div className="categoria-grid">
                    <div className="categoria">
                        <p>Hamburguesas</p>
                        <Carrusel images={imagenesEspecialidades} />
                    </div>
                    <div className="categoria">
                        <p>Mazorcadas</p>
                        <Carrusel images={mazorcadas} />
                    </div>
                    <div className="categoria">
                        <p>Platillos Especiales</p>
                        <Carrusel images={Especiales} />
                    </div>
                </div>
            </section>
            <section className="redes-sociales">
                <h2>Síguenos en redes</h2>
                <div className="redes">
                    <a href="https://instagram.com" target="_blank">📷 Instagram</a>
                    <a href="https://facebook.com" target="_blank">📘 Facebook</a>
                    <a href="https://wa.me/1234567890" target="_blank">📱 WhatsApp</a>
                </div>
            </section>

        </>
    );
}

export default Home;
