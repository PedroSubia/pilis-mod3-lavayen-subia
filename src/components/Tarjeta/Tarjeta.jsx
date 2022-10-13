import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tarjeta.css';

const Tarjeta = ({ palette }) => {
  const { id, name, colors, liked } = palette

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className='tarjeta-container'>
      <div className='tarjeta'>
        <h3>{name}</h3>
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className={`color c${index}`}
              style={{ backgroundColor: color }}
              onClick={() => copyToClipboard(color)}
            >
              <div className='hex-code'>{color}</div>
            </div>
          );
        })}
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
