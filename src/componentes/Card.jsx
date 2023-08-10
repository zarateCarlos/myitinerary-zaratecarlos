import "../css/card.css"



const Card = ({src, alt, titulo}) => {
    return (
        <div className="card">
            <img src= {src}  alt={alt} />
            <p> {titulo} </p>
        </div>
    )
}

export default Card;
