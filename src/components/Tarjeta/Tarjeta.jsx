import { useContext, } from 'react';
import { Link } from 'react-router-dom';
import './Tarjeta.css';
import { BsFillXCircleFill } from "react-icons/bs";
import { TarjetasContext } from '../../context/TarjetasContext';

const Tarjeta = ({ card }) => {
  const { id, cityName, image, current_weather } = card
  const { tarjetas, setTarjetas } = useContext(TarjetasContext);

  const handleDelete = () => {
    //Quitar de favoritos
    setTarjetas(
      tarjetas.filter((fav) => fav.id !== id )//!==
    );
  }  

  return (
    <div className='tarjeta-container'>
      <div className='tarjeta'>
        <div className='icon-delete' onClick={handleDelete} title='Quitar esta ciudad'>
          <BsFillXCircleFill />
        </div>
        <h2>{cityName}</h2>
        <div>
          <img className='imagen-ciudad' src={image} alt="image no avaliable" />
        </div>
      </div>
      <div className='button-see-more'>
        <Link className='btn-see-more' to={`/card/${id}`}>
          Ver más
        </Link>
      </div>

    </div>
  );
}

export default Tarjeta
