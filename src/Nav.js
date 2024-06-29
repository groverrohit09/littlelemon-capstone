import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";


function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return <nav className='flex-container'>
    <Link to='/' className='box'><img className='logo' src={logo} alt='little-lemon-logo' /></Link>

    <div
      className={`nav__menu ${showMenu ? "show-menu" : ""}`}
      id="nav-menu"
    >
      <Link to='/' className='box nav__link' onClick={closeMenuOnMobile} >Home</Link>
      <Link to='/' className='box nav__link' onClick={closeMenuOnMobile}>About</Link>
      <Link to='/' className='box nav__link' onClick={closeMenuOnMobile}>Menu</Link>
      <Link to='/reservations' className='box nav__link' onClick={closeMenuOnMobile}>Reservations</Link>
      <Link to='/' className='box nav__link' onClick={closeMenuOnMobile}>Order Online</Link>
      <Link to='/' className='box nav__link' onClick={closeMenuOnMobile}>Login</Link>
      <div className="nav__close" id="nav-close" onClick={toggleMenu}>
        <IoClose />
      </div>
    </div>

    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
      <IoMenu />
    </div>
  </nav >;
}

export default Nav;