import './App.css';
import { useContext, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import { getTarjetasService } from './service';

import { TarjetasContext} from './context/TarjetasContext'

import Home from './routes/Home/Home';
import TarjetaDetalles from './routes/Tarjeta/TarjetaDetalles';
import TarjetaCreacion from './routes/Tarjeta/TarjetaCreacion';
import Navigation from './routes/Navigation/Navigation';
import LoginRef from './routes/Login/LoginRef';
// import Login from './routes/Login/LoginRef';
// import LoginControlled from './routes/Login/LoginControlled';

function App() {

  const { setTarjetas } = useContext(TarjetasContext)

  useEffect(()=> {
    getTarjetasService()
    .then((data) => {
      setTarjetas(data);
    })
    .catch((err) => console.log(err));
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

export default App;
