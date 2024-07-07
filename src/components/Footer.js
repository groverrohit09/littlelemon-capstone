import React from 'react';
import "../styles/footer.css"
import logo from '../assets/verticallogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon" className="footer-logo" />
      </div>
      <div className="footer-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-contact">
        <ul>
          <li>Contact us</li>
          <li>LL</li>
          <li>littlelemon@gmail.com</li>
          <li>+1234567890</li>
        </ul>
      </div>
      <div className="footer-media">
        <ul>
          <li>Our social media</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer