import React from 'react'

import Navbar from '../components/Navbar'
import SearchProperties from '../components/SearchProperties'
import ListSearchedProperty from '../components/ListSearchedProperty'
import Footer from '../components/Footer'

export default function Search() {

  return (
        <>
        <header>
          <div className='search-container'>
            <div className='banner-search-background'>
              <Navbar />
            </div>
            <div className='wrapper'>
              <SearchProperties />
            </div>
          </div>
        </header>
        <main className='main-content'>
          <ListSearchedProperty />
        </main>
        <Footer />
        </>
  )
}