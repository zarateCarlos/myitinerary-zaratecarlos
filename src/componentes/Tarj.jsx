import React from 'react'
import '../css/tarj.css'

const Tarjeta = ({ src, alt, titulo, id, descripcion }) => {
    return (
        <div className='tarjeta'>

            <img src={src} alt={alt} />
            <h2> {titulo} </h2>
            <p> {descripcion} </p>

        </div>
    )
}

export default Tarjeta