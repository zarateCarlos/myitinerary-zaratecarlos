import { Link as Anchor } from "react-router-dom";

import "../css/card.css"



const Card = ({ src, alt, titulo, id }) => {
    return (

        <Anchor to={'/city/'+id}>
            <div className="card">
                <img src={src} alt={alt} />
                <p> {titulo} </p>
            </div>
        </Anchor>


    )
}

export default Card;
