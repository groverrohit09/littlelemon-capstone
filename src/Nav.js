import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
function Nav() {
  return <nav className='flex-container'>
    <Link to='/' className='box'><img className='logo' src={logo} alt='little-lemon-logo' /></Link>
    <Link to='/' className='box'>Home</Link>
    <Link to='/' className='box'>About</Link>
    <Link to='/' className='box'>Menu</Link>
    <Link to='/reservations' className='box'>Reservations</Link>
    <Link to='/' className='box'>Order Online</Link>
    <Link to='/' className='box'>Login</Link>
  </nav >;
}

export default Nav;