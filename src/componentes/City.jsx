import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link as Anchor } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
import itinerary_actions from '../store/actions/itineraries'
const { read_itineraries_from_city } = itinerary_actions
const { read_cityDetail } = city_actions
import Tarjeta from './Tarj'
import Activity from './Activity'
import store from '../store/store'

const City = () => {
    const [show, setShow] = useState(false);
    const [creador, setCreador] = useState([]);

    const { city_id } = useParams()

    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(read_cityDetail({ id: city_id }))
            //axios(apiUrl + 'cities/' + city_id)
            //.then(res => setTarj(res.data.response))
            //.catch(err => console.log(err))
        }, []
    )

    useEffect(
        () => {
            dispatch(read_itineraries_from_city({ city_id: city_id }))


        }, []
    )


    const city = useSelector(store => store.cities.cityDetail)
    const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
   
console.log(itineraries);



    const toggleCreador = (index) => {
        const newCreadorStates = [...creador];
        newCreadorStates[index] = !newCreadorStates[index];
        setCreador(newCreadorStates);
    };

    const getTicketIcons = (price) => {
        if (price >= 0 && price <= 50) {
            return '💵💵';
        } else if (price <= 100) {
            return '💵💵💵';
        } else if (price <= 150) {
            return '💵💵💵💵';
        } else {
            return '💵💵💵💵💵';
        }
    };


    const convertMinutesToHours = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    };


    return (


        <div className='form'>


            <Tarjeta
                key={city._id}
                titulo={city.city}
                src={city.photo}
                alt={city.city}
                id={city._id}
            />
            <br />


            <div className="view">
                <button>
                    <Anchor to='/Cities' className="boton"  >Back Cities</Anchor>
                </button>
                <span className='ity' onClick={() => setShow(!show)}>{show ? ('hiden Itinerary') : ('View Itinerary')}  </span>

            </div>

            {show && itineraries.length === 0 ? (
                <div className="noItinerary">
                    <p>THERE ARE NO ITINERARIES YET FOR THIS CITY!</p>
                    <img src="https://media.tenor.com/p8riXqjS-ycAAAAC/feel-sad.gif" alt="not itineraries" />
                </div>


            ) : (show &&
                itineraries.map((item, index) =>

                    <div key={item._id}>
                        <Tarjeta
                            key={item._id}
                            titulo={item.name}
                            src={item.photo}
                            alt={item.name}
                            id={item._id}
                        />
                        <div className="usuario">
                            <div className="avatar titulo">
                                <p>Usuario:</p>
                                <img src={item.city_id.admin_id.photo} alt="" />
                                <p>{item.city_id.admin_id.name}</p>
                            </div>
                            <div className="tags titulo">
                                <p>Hashtags:</p>
                                <p> {item.tags} </p>
                            </div>
                            <div className="duration titulo">
                                <p>Duration:</p>
                                <p> {convertMinutesToHours(item.duration)} </p>
                            </div>
                            <div className="precio titulo">
                                <p>Price:</p>
                                <p>{getTicketIcons(item.price)}</p>
                            </div>
                        </div>
                        <div className="intro">
                            <span className='flecha'>♡</span>
                            <span className='flecha' onClick={() => toggleCreador(index)}>
                                {creador[index] ? '⇑' : '⇩'}
                            </span>
                        </div>
                        {creador[index] && <div className='activity'>Activities<Activity itineraryId={item._id} /> </div>}


                    </div>
                ))

            }

        </div>


    )
}
export default City