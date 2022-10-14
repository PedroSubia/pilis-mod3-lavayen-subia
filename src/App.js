import { useContext, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { cities } from "./DB/cityList";
import { getCities } from './DB/getData';


import Home from './routes/Home/Home';
import { TarjetasContext} from './context/TarjetasContext'
import TarjetaDetalles from './routes/Tarjeta/TarjetaDetalles';
import TarjetaCreacion from './routes/Tarjeta/TarjetaCreacion';
import Navigation from './routes/Navigation/Navigation';
import LoginRef from './routes/Login/LoginRef';

// import Login from './routes/Login/LoginRef';
// import LoginControlled from './routes/Login/LoginControlled';

import './App.css';

export const App = () => {

  const { setTarjetas } = useContext(TarjetasContext)

  const getCityList = async (cities) => {
    const cityList = await getCities(cities)
    setTarjetas(cityList)
  }

  useEffect(() => {
    getCityList(cities)
  }, [])

  return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<Home/>}/>
              <Route path='login' element={<LoginRef/>}/>
              <Route path='card/:id' element={<TarjetaDetalles/>}/>
              <Route path='card/create' element={<TarjetaCreacion/>}/>
            </Route>
          </Routes>
      </div>
  );
}
