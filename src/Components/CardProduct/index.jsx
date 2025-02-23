import React from 'react'
import "./CardProduct.css"
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';


const CardProduct = ({nombre, ingredientes,precio,imagen}) => {

    const [Contador, SetContador] = useState(0);

    const SumarContador = () => SetContador(Contador + 1);
    const RestarContador = () => SetContador(Contador > 0 ? Contador - 1 : 0);

    return (
        <article className='CardProducto'>
            <img src={imagen} />
            <h4>{nombre}</h4>
            <p>{ingredientes}</p>
            <div className='contadorProducto' >
                <button onClick={RestarContador} className='boton'>-</button>
                <span>{Contador}</span>
                <button onClick={SumarContador} className='boton'>+</button>
            </div>
            <h4>Precio Unidad: <br/>
                ${precio}</h4>
            <button className='boton-comprar'>
                Comprar
                <IoCartOutline />
            </button>
        </article>
    )
}

export default CardProduct;