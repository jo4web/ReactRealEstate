import React from 'react'

import './Footer.css'
import Logo from '../assets/logo.png'

export default function Footer() {

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <img src={Logo} alt="Real Estate"></img>
          <div className="footer-social">
          <p className="follow-social">FOLLOW US</p>
          <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-links">
            <h2>Popular Searches</h2>
            <ul className='links'>
              <li><a className='anchor-bottom-links' href="#">Apartment for Rent</a></li>
              <li><a className='anchor-bottom-links' href="#">Apartment Low to hide</a></li>
              <li><a className='anchor-bottom-links' href="#">Offices for Buy</a></li>
              <li><a className='anchor-bottom-links' href="#">Offices for Rent</a></li>
            </ul>
          </div>
          <div className="bottom-links">
            <h2>Homepress Markets</h2>
            <ul>
              <li><a className='anchor-bottom-links' href="#">Los Angeles Offices</a></li>
              <li><a className='anchor-bottom-links' href="#">Las Vegas Apartment</a></li>
              <li><a className='anchor-bottom-links' href="#">Sacramento Townhome</a></li>
              <li><a className='anchor-bottom-links' href="#">San Francisco Offices</a></li>
            </ul>
          </div>
          <div className="bottom-links bottom-links3">
            <h2>Quick Links</h2>
            <ul>
              <li><a className='anchor-bottom-links' href="#">Pricing Plans</a></li>
              <li><a className='anchor-bottom-links' href="#">FAQ</a></li>
              <li><a className='anchor-bottom-links' href="#">About Us</a></li>
              <li><a className='anchor-bottom-links' href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="bottom-contact">
            <form>
              <input className="bottom-input" placeholder="Full Name" type="text"></input>
              <input className="bottom-input" placeholder="Your@email.com" type="email"></input>
              <button className="bottom-btn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}