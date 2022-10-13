import Tarjeta from "../Tarjeta/Tarjeta";
import './Listado.css'

const Listado = ({ tarjetas }) => {
  return (
    <div className='grid'>
      {tarjetas.map((card) => (
        <Tarjeta key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Listado