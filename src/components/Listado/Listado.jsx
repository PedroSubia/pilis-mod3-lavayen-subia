import Tarjeta from "../Tarjeta/Tarjeta";
import './Listado.css'

const Listado = ({ tarjetas }) => {
  return (
    <div className='grid'>
      {tarjetas.map((card) => (
        <Tarjeta key={card.id} palette={card} />
      ))}
    </div>
  );
}

export default Listado