import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Login.css'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: username.current.value,
      password: password.current.value
    }

    if (user.email && user.password) {
      fetch("https://my-json-server.typicode.com/reyvenus/JsonApiTest/users")
        .then(resp => resp.json())
        .then(resp => {
          const validacion = resp.filter(e => e.email === user.email && e.password === user.password)
          console.log("validate", validacion)
          if (validacion.length > 0) {
            localStorage.setItem('currentUser', JSON.stringify(user))
            setCurrentUser(user)
            navigate('/', {replace: true})
          }
          else {
            return Swal.fire({
              title: 'Atencion!',
              text: 'Usuario o contraseña invalidas',
              icon: 'question',
              confirmButtonText: 'volver a intentar'
            })
          }
        })

    }
    else {
      return Swal.fire({
        title: 'Incompleto',
        text: 'Por favor completar correctamente',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <>
      <div className='sign-in-container'>
        <span>Ingresa con tu usuario y contraseña</span>
        <form className='sign-in-form' onSubmit={handleSubmit}>
          <input
            className='input-form'
            type="text"
            placeholder='Nombre de usuario'
            ref={username}
          />
          <input
            className='input-form'
            type='password'
            placeholder='Contraseña'
            ref={password}
          />
          <button className='btn-form' type='submit'>Iniciar Sesión</button>
        </form>
        <div className='button-cancel'>
          <Link className='btn-cancel' to={`/`}>
            Volver al Inicio
          </Link>
        </div>
      </div>

      <div style={{ margin: 10 }}>
        <h4>Usuarios de prueba: lu14393@gmail.com</h4>
        <h4>Password de prueba: 123456</h4>
        <h5>Mas usuarios de prueba en credenciales.txt</h5>
      </div>
    </>
  )
}
export default Login