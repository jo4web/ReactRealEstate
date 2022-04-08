import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './Navbar.css'
import Logo from '../assets/logo.png'

export default function Navbar() {

  const [isShrunk, setShrunk] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const style = {
    height: isShrunk ? '70px': '105px',
    transition: 'height 0.6s',
    background: isShrunk ? '#ffffff': '',
    boxShadow: isShrunk ? '0px 10px 16px -11px rgba(0,0,0,0.3)' : ''
  }

  const styleMobile = {
    display: showMobileMenu ? 'flex' : 'none',
    top: isShrunk ? '69px' : '100px'
  }

  const handleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
        
      });
      
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);

    
  }, []);

  useEffect(() => {
    const handleScreenResize = () => {
      if(window.screen.width >= 990) {
        setShowMobileMenu(false)
      }
    }

    window.addEventListener('resize', handleScreenResize)
  }, [])


  return (
    <>
      <nav style={style}>
          <img src={Logo} alt="Real Estate" />
            <div className="menu">
              <Link to={{pathname: '/'}}>Home</Link>
              <Link to={{pathname: `/search/?locationExternalIDs=6020&purpose=for-sale&sort=any&categoryExternalID=all&roomsMin=any`}}>For Sale</Link>
              <Link to={{pathname: `/search/?locationExternalIDs=6020&purpose=for-rent&sort=any&categoryExternalID=all&roomsMin=any`}}>For Rent</Link>
              <Link to={{pathname: '/contact'}}>Contact Us</Link> 
            </div>
            <div className='hamburger-menu'>
              <button onClick={handleMenu}><i className="fa fa-bars"></i></button>
            </div>
      </nav>

      <div className="mobile-menu" style={styleMobile}>
        <div className='mobile-flex'>                                                                                 
          <Link to={{pathname: '/'}}>Home</Link>
          <Link to={{pathname: `/search/?locationExternalIDs=6020&purpose=for-sale&sort=any&categoryExternalID=all&roomsMin=any`}}>For Sale</Link>
          <Link to={{pathname: `/search/?locationExternalIDs=6020&purpose=for-rent&sort=any&categoryExternalID=all&roomsMin=any`}}>For Rent</Link>
          <Link to={{pathname: '/contact'}}>Contact Us</Link>                                  
        </div>
      </div>
    </>
  )
}