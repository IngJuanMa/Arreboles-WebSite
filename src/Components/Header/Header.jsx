import { Link } from 'react-router-dom';
import './Header.css'; // Archivo de estilos para el Header

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <img src='/logo.png' className='imagenlogo' alt='logoArreboles'></img>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/menu">Menú</Link></li>
                    <li><Link to="/contact">Sobre Nosotros</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
