import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions
import Card from './Card'
import '../css/city.css'

const Cities = () => {

  const cities = useSelector(store => store.cities.cities)
  const [reEffect, setReEffect] = useState(true)
  const texto = useRef()
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(read_cities({ text:texto.current?.value }))
      //axios(apiUrl + 'cities?city=' + text.current.value)
      // .then(res => setCities(res.data.response))
      //.catch(err => console.log(err))
    }, [reEffect]
  )

  let handlerFilter = () => {
    setReEffect(!reEffect)


  }

  return (
    <>
      <div className="container-cities">
        <div className="input">
          <input ref={texto} type="text" placeholder='&#128269; Search your city' name="text" id="text" onKeyUp={handlerFilter} />
        </div>

        <div className="cities">

          { cities.length === 0 ? (
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