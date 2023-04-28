import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import Logo from '../../images/logo/alter.svg';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (id) => {
    if (id === 'home') document.scrollIntoView(0,0);
    if (id) document.getElementById(id).scrollIntoView();
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
    <div className='navbar-container'>
      <Link  className='navbar-logo' onClick={() => closeMobileMenu("home")}>
        <img className='alter-logo' src={Logo} alt="Alter Logo" />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link className='nav-links' href="home" onClick={() => closeMobileMenu("about")}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
          
            className='nav-links'
            onClick={() => closeMobileMenu("novel")}
          >
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link
          
            className='nav-links'
            onClick={() => closeMobileMenu("musical")}
          >
            Games
          </Link>
        </li>
        <li className='nav-item'>
          <Link
          
            className='nav-links'
            onClick={() => closeMobileMenu("VR")}
          >
            Our Team
          </Link>
        </li>
        <li className='nav-item'>
          <Link
          
            className='nav-links'
            onClick={() => closeMobileMenu("VR")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className='nav-item'>
        {/* <NavLink className='nav-links' exact to="/">Home</NavLink> */}
        {isLoaded && sessionLinks}
      </div>
    </div>
  </nav>
  );
}

export default Navigation;