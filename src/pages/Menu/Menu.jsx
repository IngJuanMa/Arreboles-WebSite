import CardProduct from "../../Components/CardProduct";
import CardNav from "../../Components/CardNavCategoria";
import "./Productos.css"
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCarrito } from "../../Components/Context/CarritoContext";


// Array con info de productos destacados
const PDestacados = [
  {
    id: 1,
    nombre: "Hamburguesa Atómica",
    precio: "19000",
    imagen: "/products/H-Atómica.png"
  },
  {
    id: 2,
    nombre: "Mazorcada Tentadora",
    precio: "22000",
    imagen: "/products/choripapa.png"
  },
  {
    id: 3,
    nombre: "Choripapa Exótica",
    precio: "17000",
    imagen: "/products/choripapa.png"
  },
  {
    id: 4,
    nombre: "H.Atómica (Patacón)",
    precio: "21000",
    imagen: "/products/Ham-Patacon.png"
  }
]

// Array con info de productos de las Categorías de productos

const ListaProductos = [
  {
    id: 1,
    nombre: "Hamburguesas",
    color: "#FA951D",
    imagen: "/products/H-pan.png"
  },
  {
    id: 2,
    nombre: "H-Patacon",
    color: "#FFCC16",
    imagen: "/products/Ham-Patacon.png"
  },
  {
    id: 3,
    nombre: "Mazorcadas",
    color: "#AC6C14",
    imagen: "/products/picada.png"
  },
  {
    id: 4,
    nombre: "Choripapas",
    color: "#F1E1BE",
    imagen: "/products/choripapa.png"
  },
  {
    id: 5,
    nombre: "Picadas",
    color: "#F66222",
    imagen: "/products/picada.png"
  },
  {
    id: 6,
    nombre: "Adicionales",
    color: "#8B3C19",
    imagen: "/products/adicion.png"
  },
  {
    id: 7,
    nombre: "Bebidas",
    color: "#FFCC16",
    imagen: "/products/bebidas.png"
  },
  {
    id: 8,
    nombre: "Bebidas Calientes",
    color: "#FA951D",
    imagen: "/products/bebidas.png"
  }
]

// Array con info detallada de los productos

const ProductosUno = [
  {
    id: 1,
    nombre: "La Clasica",
    precio: "13000",
    ingredientes: "Pan brioche, carne artesanal 120g, tomate, verduras frescas, cebolla caramelizada y maíz tierno",
    imagen: "/products/H-Clasica.png",
    categoria: "Hamburguesas"
  },
  {
    id: 2,
    nombre: "La Caribeña",
    precio: "16000",
    ingredientes: "Pan brioche, carne artesanal 120g, piña asada, ripio, maiz tierno, cebolla caramelizada,lechuga,tomate",
    imagen: "/products/H-Caribeña.png",
    categoria: "Hamburguesas"
  },
  {
    id: 3,
    nombre: "La Suprema",
    precio: "18000",
    ingredientes: "Pan brioche, carne artesanal 120g, Pollo apanado, queso doble, verduras frescas, cebolla caramelizada, ripio",
    imagen: "/products/H-Suprema.png",
    categoria: "Hamburguesas"
  },
  {
    id: 4,
    nombre: "La Doble",
    precio: "18000",
    ingredientes: "Pan brioche, carne artesanal 120g doble, cebolla caramelizada, verduras frescas, ripio, quesodoble",
    imagen: "/hambur.png",
    categoria: "Hamburguesas"
  },
  {
    id: 5,
    nombre: "La Atómica",
    precio: "19000",
    ingredientes: "Pan brioche, carne artesanal 120g, chorizo, tocineta, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/products/H-Atómica.png",
    categoria: "Hamburguesas"
  },

  // Hamburguesas en patacón
  {
    id: 6,
    nombre: "La Clasica (Patacón)",
    precio: "15000",
    ingredientes: "Pan brioche, carne artesanal 120g, tomate, verduras frescas, cebolla caramelizada y maíz tierno",
    imagen: "/products/H-Clásica-PT.png",
    categoria: "H-Patacon"
  },
  {
    id: 7,
    nombre: "La Caribeña (Patacón)",
    precio: "18000",
    ingredientes: "Pan brioche, carne artesanal 120g, piña asada, ripio, maiz tierno, cebolla caramelizada, lechuga, tomate",
    imagen: "/products/H-Caribeña-PT.png",
    categoria: "H-Patacon"
  },
  {
    id: 8,
    nombre: "La Suprema (Patacón)",
    precio: "20000",
    ingredientes: "Pan brioche, carne artesanal 120g, Pollo apanado, queso doble, verduras frescas, cebolla caramelizada, ripio",
    imagen: "/products/H-Suprema-PT.png",
    categoria: "H-Patacon"
  },
  {
    id: 9,
    nombre: "La Doble (Patacón)",
    precio: "20000",
    ingredientes: "Pan brioche, carne artesanal 120g doble, cebolla caramelizada, verduras frescas, ripio, quesodoble",
    imagen: "/products/Ham-Patacon.png",
    categoria: "H-Patacon"
  },
  {
    id: 10,
    nombre: "La Atómica (Patacón)",
    precio: "21000",
    ingredientes: "Pan brioche, carne artesanal 120g, chorizo, tocineta, maiz tierno, cebolla caramelizada,verduras frescas",
    imagen: "/products/Ham-Patacon.png",
    categoria: "H-Patacon"
  },

  // Mazorcadas
  {
    id: 11,
    nombre: "Estelar",
    precio: "18000",
    ingredientes: "Pollo en trozos, carne en trozos, lechuga, ripio, salsas, tocineta, queso gratinado, maíz tierno, cebolla caramelizada",
    imagen: "/hamburgesa.png",
    categoria: "Mazorcadas"
  },
  {
    id: 12,
    nombre: "Tentadora",
    precio: "22000",
    ingredientes: "Pollo en trozos, carne en trozos, Chorizo en trozos, lechuga, ripio, salsas, tocineta, queso gratinado, maíz tierno, cebolla caramelizada",
    imagen: "/hamburgesa.png",
    categoria: "Mazorcadas"
  },

  // Choripapas
  {
    id: 14,
    nombre: "Sencilla",
    precio: "14000",
    ingredientes: "Chorizo en trozos, papa natural estilo francesa y salsas (Opcional)",
    imagen: "/products/choripapa.png",
    categoria: "Choripapas"
  },
  {
    id: 13,
    nombre: "Exótica",
    precio: "17000",
    ingredientes: "Papa natural estilo francesa, chorizo en trozos, tocineta, cebolla caramelizada,ripio,queso gratinado",
    imagen: "/products/choripapa.png",
    categoria: "Choripapas"
  },
  // Picadas
  {
    id: 15,
    nombre: "Picada Individual",
    precio: "22000",
    ingredientes: "Porcion de pollo asado, porción de carne, porción de chorizo, 2 nuggets de pollo, 180g de papa, plátanos y salsas",
    imagen: "/products/picada.png",
    categoria: "Picadas"
  },
  {
    id: 16,
    nombre: "Pica2",
    precio: "42000",
    ingredientes: "Doble porcion de pollo asado, doble porción de carne, 2 chorizos, 4 nuggets de pollo, 400g de papa, plátanos y salsas",
    imagen: "/products/picada.png",
    categoria: "Picadas"
  },

  //Adicionales
  {
    id: 17,
    nombre: "Papas Fritas",
    precio: "5000",
    ingredientes: "Porción de 250g, estilo francesa",
    imagen: "/products/papas.png",
    categoria: "Adicionales"
  },
  {
    id: 18,
    nombre: "Porción de carne ",
    precio: "5000",
    ingredientes: "Porción 120g de carne para hamburguesa artesanal",
    imagen: "/products/carne.png",
    categoria: "Adicionales"
  },
  {
    id: 19,
    nombre: "Porción pollo apanado",
    precio: "5000",
    ingredientes: "Porción de pollo apanado 130g",
    imagen: "/products/pollo.png",
    categoria: "Adicionales"
  },
  {
    id: 20,
    nombre: "Chorizo",
    precio: "5000",
    ingredientes: "Unidad chorizo las brisas",
    imagen: "/products/chorizo.png",
    categoria: "Adicionales"
  }

]

const Categorias = ["Hamburguesas", "H-Patacon", "Mazorcadas", "Choripapas", "Picadas", "Adicionales", "Bebidas"]



function productos() {

  const { agregarUNidadAlCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const [categoriaSeleccionada, SetCategoriaSeleccionada] = useState("Hamburguesas");

  const ProductosFiltrados = categoriaSeleccionada === "Todas"
    ? ProductosUno :
    ProductosUno.filter((prod) => prod.categoria === categoriaSeleccionada);

  const handleAgregar = (item) => {
    agregarUNidadAlCarrito(item);
    setMensaje(`${item.nombre} se agregó al carrito ✅`); // Mostrar mensaje
    setTimeout(() => setMensaje(""), 2000); // Ocultar mensaje después de 2 segundos
  };

  return (
    <section className="s-productos" id="menu">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        Nuestros productos destacados
        <div className="guion" />
      </motion.h1>

      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        Haz tu compra directamente vía WhatsApp
      </motion.p>

      <div className="destacados">
        {PDestacados.map((item) => {
          return (
            <>
              <motion.article
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="carddestacado"
                 key={item.id}>
                <img src={item.imagen} className='fotoproducto' />
                <div className="info-card">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio}</p>
                  <button onClick={() => handleAgregar(item)}>
                    Comprar
                    <IoCartOutline />
                  </button>
                </div>
                {/* Mensaje emergente */}
                {mensaje && (
                  <motion.div
                    className="mensaje-agregado"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mensaje}
                  </motion.div>
                )}
              </motion.article>
            </>
          )
        })}
      </div>

      <h1 className="titulomen">Conoce nuestro Menú</h1>
      <p className="titutlocategorías">Categorías</p>

      {/* código para generar las categorías dinámicamente
        a partir del array:"ListaProductos" */}

      <nav className="listaproductos">
        <div
          className="carruselproduc">
          {
            ListaProductos.map((item) => {
              return (
                <a
                  key={item.id}
                  onClick={() => SetCategoriaSeleccionada(item.nombre)}
                  className={`itemproducto ${categoriaSeleccionada === item.nombre ? "active" : ""}`}>
                  <CardNav
                    Activa={categoriaSeleccionada === item.nombre}
                    color={item.color}
                    nombre={item.nombre}
                    imagen={item.imagen} />
                </a>
              )
            })
          }
        </div>
      </nav>

      {/* Código para generar dinámicamente las cards de los Productos
        dependiendo de la categoría que el usuario elija */}

      <div className="CardsProductos">
        {ProductosFiltrados.map((item) => {
          return (
            <motion.div
              className="div"
              key={item.id}
              initial={{ opacity: 0, y: -50 }}  // Estado inicial (opacidad 0 y posición desplazada hacia abajo)
              whileInView={{ opacity: 1, y: 0 }}  // Animación cuando se monta
              transition={{ duration: 0.5, ease: "easeOut" }}  // Duración y tipo de animación
            >
              <CardProduct
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                ingredientes={item.ingredientes}
                imagen={item.imagen} />
            </motion.div>
          );
        })}

      </div>
    </section >
  );
}

export default productos;
