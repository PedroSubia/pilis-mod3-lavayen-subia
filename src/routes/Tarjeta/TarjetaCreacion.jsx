import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TarjetasContext } from '../../context/TarjetasContext';
import './TarjetaCreacion.css';

const TarjetaCreacion = () => {

  const { tarjetas, setTarjetas } = useContext(TarjetasContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      color1: '#ffffff',
      color2: '#ff6161',
      color3: '#74e797',
      color4: '#769cf4',
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    const tarjetaNueva = {
      id: tarjetas.length + 1,
      name: data.paletteName,
      colors: [data.color1, data.color2, data.color3, data.color4],
      liked: false,
    }

    setTarjetas([...tarjetas, tarjetaNueva])
    navigate('/')
  }

  return (
    <div className='card-new-container'>
      <span>Crea una nueva paleta</span>
      <form className='card-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-card-name-form'
          type='text'
          placeholder='Nombre de la paleta'
          {...register('paletteName', {
            required: 'Debe ingresar un nombre',
          })}
        />
        <p>{errors.paletteName?.message}</p>
        <input
          type='color'
          {...register('color1', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color1?.message}</p>
        <input
          type='color'
          {...register('color2', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color2?.message}</p>
        <input
          type='color'
          {...register('color3', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color3?.message}</p>
        <input
          type='color'
          {...register('color4', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color4?.message}</p>
        
        <button className='btn-form' type='submit'>
          Crear Paleta
        </button>
      </form>
    </div>
  );
};

export default TarjetaCreacion;
