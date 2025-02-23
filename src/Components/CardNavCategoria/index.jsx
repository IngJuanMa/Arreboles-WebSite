import React from 'react'
import "./CardNav.css"
import { MdOutlineExpandMore } from "react-icons/md";


const CardNav = ({nombre,color,imagen, Activa}) => {
    return (
        <article className={`CardNav ${Activa ? "active" : ""}`}>
            <section className='s-foto' style={{ backgroundColor: color }}>
                <img src={imagen} className='imagen' />
            </section>
            
                <h4>{nombre}</h4>
                <p style={{ backgroundColor: color }}>
                    <MdOutlineExpandMore size={10}/>
                </p>
            
        </article>
    )
}

export default CardNav;