import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import { Link, useHistory } from 'react-router-dom';
import logo from './images/logo.gif'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           Jones
            {/* <img src={logo} className='logo'></img>  */}
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <ImCancelCircle color='white'/> : <GiHamburgerMenu color ='white'/>} 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutMe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
                
            <li>
              <Link
                to='/ContactMe'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button onClick={()=>history.push("/ContactMe")} buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;