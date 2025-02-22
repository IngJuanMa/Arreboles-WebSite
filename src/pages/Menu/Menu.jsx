import "./Productos.css"
import { IoCartOutline } from "react-icons/io5";

const PDestacados = [
  {
    id: 1,
    nombre: "Hamburguesa Atómica",
    precio: "19.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  },
  {
    id: 2,
    nombre: "Mazorcada Tentadora",
    precio: "22.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  },
  {
    id: 3,
    nombre: "Choripapa Exótica",
    precio: "17.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  },
  {
    id: 4,
    nombre: "H.Atómica (Patacón)",
    precio: "21.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  }
]

const ListaProductos =[
  {
    id:1,
    nombre:"Hamburguesas"
  },
  {
    id:2,
    nombre:"Mazorcadas"
  },
  {
    id:3,
    nombre:"Choripapas"
  },
  {
    id:4,
    nombre:"Picadas"
  },
  {
    id:5,
    nombre:"Adicionales"
  },
  {
    id:6,
    nombre:"Bebidas"
  },
]

function productos() {
  return (
    <section className="s-productos">
      <h1>
        Nuestros productos destacados
        <div className="guion" />
      </h1>
      <p>Haz tu compra directamente vía WhatsApp </p>

      <div className="destacados">
        {PDestacados.map((item) => {
          return (
            <>
              <article className="carddestacado" key={item.id}>
                <img src={item.imagen} className='fotoproducto' />
                <div className="info-card">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio}</p>
                  <button>
                    Comprar
                    <IoCartOutline />
                  </button>
                </div>
              </article>
            </>
          )
        })}
      </div>

      <h1>Menú</h1>
        <nav className="listaproductos">
          {
            ListaProductos.map((item)=>{
              return(
                <a key={item.id} className="itemproducto">{item.nombre} </a>
              )
            })
          }
        </nav>
    </section >
  );
}

export default productos;
