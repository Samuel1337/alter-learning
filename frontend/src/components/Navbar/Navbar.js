import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link  className='navbar-logo' onClick={() => closeMobileMenu("home")}>
            CABLE PRODUCTIONS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link className='nav-links' href="home" onClick={() => closeMobileMenu("about")}>
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              
                className='nav-links'
                onClick={() => closeMobileMenu("novel")}
              >
                NOVEL
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              
                className='nav-links'
                onClick={() => closeMobileMenu("musical")}
              >
                MUSICAL
              </Link>
            </li>
            <li className='nav-item'>
              <Link
              
                className='nav-links'
                onClick={() => closeMobileMenu("VR")}
              >
                VR EXPERIENCE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
