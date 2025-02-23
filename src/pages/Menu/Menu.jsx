import CardProduct from "../../Components/CardProduct";
import CardNav from "../../Components/CardNavCategoria";
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

const ListaProductos = [
  {
    id: 1,
    nombre: "Hamburguesas",
    color:"#FA951D",
    imagen:"/products/H-pan.png"
  },
  {
    id: 2,
    nombre: "H. en Patacón",
    color:"#FFCC16",
    imagen:"/products/Ham-Patacon.png"
  },
  {
    id: 3,
    nombre: "Mazorcadas",
    color:"#AC6C14",
    imagen:"/products/picada.png"
  },
  {
    id: 4,
    nombre: "Choripapas",
    color:"#F1E1BE",
    imagen:"/products/picada.png"
  },
  {
    id: 5,
    nombre: "Picadas",
    color:"#F66222",
    imagen:"/products/picada.png"
  },
  {
    id: 6,
    nombre: "Adicionales",
    color:"#8B3C19",
    imagen:"/products/adicion.png"
  },
  {
    id: 7,
    nombre: "Bebidas",
    color:"#FFCC16",
    imagen:"/products/bebidas.png"
  },
]

const ProductosUno = [
  {
    id: 1,
    nombre: "Hamburguesa Clasica",
    precio: "19.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  },
  {
    id: 2,
    nombre: "Hamburguesa Caribeña",
    precio: "22.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/patacon.jpeg"
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
  },
  {
    id: 5,
    nombre: "H.Atómica (Patacón)",
    precio: "21.000",
    ingredientes: "Pan brioche, carne artesanal 125g, chorizo, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/hamburgesa.png"
  }
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

      <h1 className="titulomen">Conoce nuestro Menú</h1>
      <p className="titutlocategorías">Categorías</p>
      <nav className="listaproductos">
        <div className="carruselproduc">
        {
          ListaProductos.map((item) => {
            return (
              <a key={item.id} >
                <CardNav 
                color={item.color} 
                nombre={item.nombre}
                imagen={item.imagen}/> 
                </a>
            )
          })
        }
        </div>
      </nav>

      <div className="CardsProductos">
        {ProductosUno.map((item) => {
          return (
            <>
                <CardProduct
                  key={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  ingredientes={item.ingredientes}
                  imagen={item.imagen}
                />
            </>
          );
        })}

      </div>
    </section >
  );
}

export default productos;
