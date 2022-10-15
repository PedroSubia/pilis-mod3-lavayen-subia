import { useContext } from 'react';
import './Home.css';
import Listado from '../../components/Listado/Listado';
import { TarjetasContext } from '../../context/TarjetasContext';

const Home = () => {
  
  const { tarjetas } = useContext(TarjetasContext);

  return (
    <>
      <div className='main-container'>
        <Listado tarjetas={tarjetas} />
      </div>
    </>
  );
};

export default Home;
