import logo from './logo.jpeg';
function Nav() {
  return <nav className='flex-container'>
    <div className='box'><img className='logo' src={logo} alt='little-lemon-logo' /></div>
    <div className='box'><a href="/home">Home</a></div>
    <div className='box'><a href="/about">About</a></div>
    <div className='box'><a href="/menu">Menu</a></div>
    <div className='box'><a href="/reservations">Reservations</a>  </div>
    <div className='box'><a href="/order-online">Order Online</a>  </div>
    <div className='box'><a href="/login">Login</a>  </div>
  </nav>;
}

export default Nav;