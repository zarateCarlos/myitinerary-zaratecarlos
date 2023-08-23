import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link as Anchor } from "react-router-dom"
import axios from 'axios'
import apiUrl from '../apiUrl'
import Tarjeta from './Tarj'

const City = () => {

    const [tarj, setTarj] = useState([])
    const { city_id, } = useParams()
    useEffect(
        () => {
            axios(apiUrl + 'cities/' + city_id)
                .then(res => setTarj(res.data.response))
                .catch(err => console.log(err))
        }, []
    )

    return (


        <div className='form'>

            {tarj && (
                <Tarjeta
                    key={tarj.index}
                    titulo={tarj.city}
                    src={tarj.photo}
                    alt={tarj.city}
                />)}
                <br />
                <h2>"Under Construction"</h2>
                <button>
                    <Anchor to='/Cities' className="boton"  >Back Cities</Anchor>
                </button>
        </div>

    )
}
export default City