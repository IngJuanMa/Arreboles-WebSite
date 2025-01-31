
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h1>Menú</h1>
      <ul>
        <li>Hamburguesa - $5 <button>Ordenar por WhatsApp</button></li>
        <li>Pizza - $7 <button>Ordenar por WhatsApp</button></li>
        <li>Snacks - $3 <button>Ordenar por WhatsApp</button></li>
      </ul>
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
}

export default Menu;
