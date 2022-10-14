import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({ card }) => {
  const { id, cityName, image, current_weather } = card

  // const copyToClipboard = (value) => {
  //   navigator.clipboard.writeText(value)
  // }

  return (
    <div className='tarjeta-container'>
      <div className='tarjeta'>
        <h2>{cityName}</h2>
        <div
          // key={index}
          // className={`color c${index}`}
          // style={{ backgroundColor: color }}
          // onClick={() => copyToClipboard(color)}
        >
          <img className='imagen-ciudad' src={image} alt="image no avaliable" />

          {/* <div className='hex-code'>{color}</div> */}
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
