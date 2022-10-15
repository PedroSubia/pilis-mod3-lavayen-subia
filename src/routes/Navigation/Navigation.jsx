import { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Navigation.css';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setCurrentUser(null);
    navigate("/login", {replace: true})
    
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src="https://w7.pngwing.com/pngs/958/648/png-transparent-the-weather-channel-inc-yahoo-computer-icons-weather-purple-violet-magenta-thumbnail.png" alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          {
            currentUser&&
            (
              <h2>{currentUser.email}</h2>  
            )
          }
          {currentUser ? (
            <Link className='nav-link' to='/card/create'>
              <b>Nueva Tarjeta</b>
            </Link>
          ) : (
            <span className='nav-link' title='Debe iniciar sesion para agregar una ciudad'>Nueva Tarjeta</span>
          )}

          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              <b>Cerrar Sesión</b>
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
              <b>Iniciar Sesión</b>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;