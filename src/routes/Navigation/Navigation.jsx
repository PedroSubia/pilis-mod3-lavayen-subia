import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import palettoLogo from '../../assets/logo.png';
import './Navigation.css';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src="https://w7.pngwing.com/pngs/958/648/png-transparent-the-weather-channel-inc-yahoo-computer-icons-weather-purple-violet-magenta-thumbnail.png" alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          {currentUser ? (
            <Link className='nav-link' to='/card/create'>
              Nueva Tarjeta
            </Link>
          ) : (
            <span className='nav-link'>Nueva Tarjeta</span>
          )}

          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
