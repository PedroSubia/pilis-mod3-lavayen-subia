import { useEffect, useState } from "react"
import { getData } from './DB/getData';

import './App.css';

export const App = () => {

  const [city, setCity] = useState({})

  useEffect(() => {
    getData(-23.573664488701304, -65.39794969009938)
      .then(resp => {
        const clima = {
          latitude: resp.latitude,
          longitud: resp.longitude,
          temperatura: resp.current_weather.temperature,
          velocidadviento: resp.current_weather.windspeed
        }
        setCity(clima)
      })
  }, [])


  return (
    <div className="App">
      <pre>
        {
          JSON.stringify(city, null, 2)
        }
      </pre>
    </div>
  );
}