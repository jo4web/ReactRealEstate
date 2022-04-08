import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Maps from '../components/PropertyDetails/Maps'

import './Contact.css'

export default function Contact() {

  const geography = {
    'lat': 25.124783,
    'lng': 55.153324
}

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
        <>
        <header>
          <div className='container-contact-details'>
            <Navbar />
          <div className='banner-background-details'></div>
          <div className='wrapper-details-contact'>
            <h1 className="title-details">Contact</h1>
            <p className='breadcrumb'>Home / Contact</p>
          </div>
          </div>
          </header>
          <main className='main'>
            <div className='contact-container'>
              <div className='contact-map'>
                <Maps center={geography} zoom={16} />
              </div>
              <form className='contact-page' onSubmit={handleSubmit}>
                <h2>Contact Now</h2>
                <input id="contact-input" type='text' placeholder='Name'></input>
                <input id="contact-input" type='text' placeholder='Phone'></input>
                <input id="contact-input" type='text' placeholder='Phone'></input>
                <textarea id="contact-text" placeholder='Message'></textarea>
                <button id="contact-submit" type='submit'>Submit</button>

              </form>
            </div>
            <div className='contact-footer'>
              <div className='contact-infos'>
                <div className='contact-inner'>
                  <i className="fa fa-phone"></i>
                  <span>Call Us:</span>
                </div>
                <h4>(000) 111 222 333</h4>
              </div>
              <div className='contact-infos'>
                <div className='contact-inner'>
                  <i className="fa fa-fax"></i>
                  <span>Fax:</span>
                </div>
                <h4>(000) 111 222 333</h4>
              </div>
              <div className='contact-infos'>
                <div className='contact-inner'>
                  <i className="fa fa-envelope"></i>
                  <span>Have any Question?</span>
                </div>
                <h4>example@realestate.com</h4>
              </div>
              <div className='contact-infos'>
                <div className='contact-inner'>
                  <i className="fa fa-phone"></i>
                  <span>Address:</span>
                </div>
                <h4>216 Trinity Ave, Pasadena, CA 95046, United States</h4>
              </div>
              
            </div>
          </main>
          <Footer />
        </>
  )
}