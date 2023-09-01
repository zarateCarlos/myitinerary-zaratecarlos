import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "./Card"
import "../css/hero.css"
import { Link as Anchor } from "react-router-dom"
import city_actions from "../store/actions/cities"
const { read_carousel } = city_actions

const Hero = () => {

    const carousel = useSelector(store => store.cities.carousel)
    const dispatch = useDispatch()

    useEffect(
        () => {
            if (carousel.length===0) {
                dispatch(read_carousel())
            }
            
            // axios(apiUrl + 'cities/carousel')
            //.then(res => setData(res.data.data_carousel))
            //.catch(err => console.log(err))
        },
        []
    )


    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    let siguiente = () => {
        if (carousel.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
        }

    }
    let anterior = () => {
        if (counter <= 0) {
            setCounter(carousel.length - 4)
            setCounterTo(carousel.length)
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
                    {carousel.slice(counter, counterTo).map((item, index) => (
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