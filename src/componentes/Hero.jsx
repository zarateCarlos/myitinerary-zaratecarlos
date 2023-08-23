import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import Card from "./Card"
import "../css/hero.css"
import { Link as Anchor } from "react-router-dom"


const Hero = () => {
    const [data, setData] = useState([])

    useEffect(
        () => {
            axios(apiUrl + 'cities/carousel')
                .then(res => setData(res.data.data_carousel))
                .catch(err => console.log(err))
        },
        []
    )


    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    let siguiente = () => {
        if (data.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
        }

    }
    let anterior = () => {
        if (counter <= 0) {
            setCounter(data.length - 4)
            setCounterTo(data.length)
        } else {
            setCounter(counter - 4)
            setCounterTo(counterTo - 4)
        }

    }

    return (
        <main className="hero">
            <div className="txt-hero">
                <h1>Find the perfect destination</h1>
                <p>Our app will help you find the perfect path for your next <br />
                    trip. With an easy-to-use interface and a host of itinerary <br />
                    options, planning your next trip has never been easier.</p>

                <button>
                    <Anchor to='/Cities' className="boton"  >View More</Anchor>
                </button>

            </div>

            <div className="carusel">
                <div className="flecha" onClick={anterior} >&lt;</div>

                <div className="card-contenedor" >
                    {data.slice(counter, counterTo).map((item, index) => (
                        <Card
                            key={index}
                            src={item.photo}
                            titulo={item.city}
                            alt={item.id}
                            id={item.id}
                        />
                    ))}
                </div>


                <div className="flecha" onClick={siguiente} >&gt;</div>
            </div>

        </main>
    )
}
export default Hero