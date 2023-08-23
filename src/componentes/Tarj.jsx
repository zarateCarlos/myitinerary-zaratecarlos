import React from 'react'
import '../css/tarj.css'

const Tarjeta = ({ src, alt, titulo }) => {
    return (
        <div className='tarjeta'>

            <img src={src} alt={alt} />
            <h2> {titulo} </h2>

        </div>
    )
}

export default Tarjeta