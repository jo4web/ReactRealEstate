import React from 'react'

import Navbar from '../components/Navbar'
import PropertiesForSale from '../components/PropertiesForSale'
import SearchProperties from '../components/SearchProperties'
import Agent from '../components/Agent'
import PropertiesForRent from '../components/PropertiesForRent'
import Footer from '../components/Footer'

import './Homepage.css'

export default function Homepage() {

  return (
        <>
        <header>
          <div className='container'>
            <div className='banner-background'>
              <Navbar />
            </div>
              <div className='wrapper'><p className="slogan">The Best Way To</p>
              <h1 className="title-homepage">Find Your Perfect Home</h1>
              <SearchProperties />
            </div>
          </div>
        </header>
          <main className='main-content'>
            <PropertiesForSale />
            <Agent />
            <PropertiesForRent />
          </main>
          <Footer />
        </>
  )
}