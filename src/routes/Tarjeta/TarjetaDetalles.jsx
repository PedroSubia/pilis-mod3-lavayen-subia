import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import './TarjetaDetalles.css';

const TarjetaDetalles = () => {
  const { id } = useParams();
  const { tarjetas } = useContext(TarjetasContext);
  const [tarjeta] = tarjetas.filter(
    (tarjeta) => tarjeta.id === Number(id)
  );

  return (
    <div className='card-display-container'>
      <div className='card-display-card'>
        <h1 className='card-display-name'>{tarjeta.name}</h1>

      </div>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default TarjetaDetalles;
