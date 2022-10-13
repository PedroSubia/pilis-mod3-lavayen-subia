import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import './TarjetaDetalles.css';

const TarjetaDetalles = () => {
  const { id } = useParams();
  const { tarjetas } = useContext(TarjetasContext);
  
  const [tarjeta] = tarjetas.filter((tarjeta) => tarjeta.id === Number(id)
  );

  return (
    <div className='card-display-container'>
      <div className='card-display-card'>
        <h1 className='card-display-name'>{tarjeta.cityName}</h1>
        <img src={tarjeta.image} alt="image no avaliable" />
        <h2>Temperatura actual: {tarjeta.current_weather.temperature} C°</h2>
        <h3>Latitud geografica: {tarjeta.latitude}</h3>
        <h3>Longitud geografica: {tarjeta.longitude}</h3>
        <h3>Velocidad actual del viento: {tarjeta.current_weather.windspeed}</h3>
      </div>
      
      <Link className='btn-back' to='/home'>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default TarjetaDetalles;
