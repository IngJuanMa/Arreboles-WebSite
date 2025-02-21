
import './Header.css';
import { IoCartOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

const bajar = (delay) => {
    return {
        initial: {
            y: "-100%",
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

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    src='/logodos.png'
                    className='imagenlogo'
                    alt='logoArreboles' />

                <ul>
                    <motion.li
                        variants={bajar(0.3)}
                        initial="initial"
                        whileInView="animate">
                        <a to="/">Inicio</a>
                    </motion.li>

                    <motion.li
                        variants={bajar(0.5)}
                        initial="initial"
                        whileInView="animate">
                        <a to="/menu">Productos</a>
                    </motion.li>

                    <motion.li
                        variants={bajar(0.7)}
                        initial="initial"
                        whileInView="animate">
                        <a to="/contact">Nosotros</a>
                    </motion.li>
                </ul>
                <div >
                    <motion.button
                        variants={bajar(0.3)}
                        initial="initial"
                        whileInView="animate"
                        className='nav-carrito'>
                        <IoCartOutline size={35} />
                    </motion.button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
