import { useContext, } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import { Link } from 'react-router-dom';

import './TarjetaCreacion.css';
import { getCities } from '../../DB/getData';

const TarjetaCreacion = () => {

  const { tarjetas, setTarjetas } = useContext(TarjetasContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {}
  });

  const onSubmit = async (data) => {
    const ultimoID = tarjetas[(tarjetas.length - 1)].id
    const tarjetaNueva = [
      {
        id: ultimoID + 1,
        name: data.nombre,
        lat: data.latitud,
        lon: data.longitud,
        image: data.imagen,
      }
    ]
    const array = await getCities( tarjetaNueva)
    
    setTarjetas([...tarjetas].concat(array))
    navigate('/')
  }

  return (
    <div className='card-new-container'>
      <span>Crea una nueva ciudad</span>
      <form className='card-form' onSubmit={handleSubmit(onSubmit)}>

        <input
          className='input-card-name-form'
          type='text'
          placeholder='Nombre de la Ciudad'
          {...register('nombre', {
            required: 'Debe ingresar un nombre',
          })}
        />
        <p>{errors.nombre?.message}</p>

        <input
          className='input-card-name-form'
          type='text'
          placeholder='Latitud Geografica de la Ciudad'
          {...register('latitud', {
            required: 'Debe ingresar una latitud',
          })}
        />
        <p>{errors.latitud?.message}</p>

        <input
          className='input-card-name-form'
          type='text'
          placeholder='Longitud Geografica de la Ciudad'
          {...register('longitud', {
            required: 'Debe Ingresar una longitud',
          })}
        />
        <p>{errors.longitud?.message}</p>

        <input
          className='input-card-name-form'
          type='text'
          placeholder='Link Imagen que representa a la Ciudad'
          {...register('imagen', {
            required: 'Debe ingresar un link',
          })}
        />
        <p>{errors.imagen?.message}</p>

        <button className='btn-form' type='submit'>
          Crear Ciudad
        </button>
      </form>

      <div className='button-cancel'>
        <Link className='btn-cancel' to={`/`}>
          Cancelar
        </Link>
      </div>
    </div>
  );
};

export default TarjetaCreacion;
