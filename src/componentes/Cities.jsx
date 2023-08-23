import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Card from './Card'
import apiUrl from '../apiUrl'
import '../css/city.css'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  useEffect(
    () => {
      axios(apiUrl + 'cities?city=' + text.current.value)
        .then(res => setCities(res.data.response))
        .catch(err => console.log(err))
    }, [reEffect]
  )

  let handlerFilter = () => {
    setReEffect(!reEffect)


  }

  return (
    <>
      <div className="container-cities">
        <div className="input">
          <input ref={text} type="text" placeholder='&#128269; Search your city' name="text" id="text" onKeyUp={handlerFilter} />
        </div>

        <div className="cities">

          {cities.length === 0 ? (
          <div className="buscar">
              <h2>No cities found with that name!</h2>
            <img src="/buscar.gif" alt="" />
          </div>
          ) : (
            cities.map(item =>
              <Card
                key={item._id}
                titulo={item.city}
                src={item.photo}
                alt={item.city}
                id={item._id}
              />
            ))}
        </div>


      </div>

    </>


  )
}

export default Cities;