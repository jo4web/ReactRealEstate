import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Amenities from '../components/PropertyDetails/Amenities'
import Slide from '../components/PropertyDetails/Slide'
import Maps from '../components/PropertyDetails/Maps'
import MoreInfo from '../components/PropertyDetails/MoreInfo'
import Description from '../components/PropertyDetails/Description'
import Recommended from '../components/PropertyDetails/Recommended'

import api from '../services/api'

import './PropertyDetails.css'

export default function PropertyDetails() {
  const { propertyId } = useParams();

  const [data, setData] = useState({})
  const [recommendedData, setRecommendedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/properties/detail?externalID=${propertyId}`)
      setData(response.data)
    }

      fetchData();

  }, [propertyId])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/properties/list?locationExternalIDs=5002&purpose=${data.purpose}&hitsPerPage=4&page=0&lang=en`)
      setRecommendedData(response.data.hits)
    }

      fetchData();

  }, [data.purpose])

  return (
        <>
        <header>
          <div className='container-details'>
            <Navbar />
          <div className='banner-background-details'></div>
          <div className='wrapper-details'>
            <h1 className="title-details">Property Details</h1>
            <p className='breadcrumb'>Home / Property Details</p>
          </div>
          </div>
          </header>
          <main className="main-property-details">
            <section className='property-container'>
              <div className='property-info'>
                {data.photos && <Slide photos={data.photos}/>}
                <div className='property-price-title'>
                  {data.price && <h2 className='property-title-detail'><span className='property-price-strong'>{data.price}<br></br></span>{data.title}</h2>}
                </div>
                <aside className='property-contact-mobile'>

                  {data.agency && <div className='property-contact-owner'>
                    <img className='contact-owner-img' src={data.agency.logo.url} alt="Agency" />
                    <h5 className='contact-owner-name'>{data.agency.name}</h5>
                    {data.contactName && <p className='contact-para'><strong>Agent:</strong> {data.contactName}</p>}
                    {data.phoneNumber.mobile && <div className='more-info-about'>
                      <i className="fa fa-phone"></i>
                      <h5 className='inner-title'>Phone</h5>
                      <p className='contact-para'>{data.phoneNumber.mobile}</p>
                    </div>}
                </div>}

                <div className='property-contact-us'>
                  <h4 className='bottom-title'>Contact Us</h4>
                  <input className='contact-input' type='text' placeholder='Full Name'></input>
                  <input className='contact-input' type='email' placeholder='Email'></input>
                  <input className='contact-input' type='text' placeholder='Messages'></input>
                  <button className='contact-submit' type='submit'>Send Messages</button>
                </div>
              </aside>
               {data.rooms && data.baths && data.area && <MoreInfo rooms={data.rooms} baths={data.baths} area={data.area} />}
                {data.description && <Description description={data.description} />}

                <Maps center={data.geography} zoom={20} />

                {data.amenities && <Amenities amenities={data.amenities} />}
                
                {data.floorPlan && 
                  <div className='property-details-floor-plan'>
                    <h3 className='floor-title'>Floor Plan</h3> 
                    <img className='floor-img' src={`https://images.bayut.com/thumbnails/${data.floorPlan.images[0].image2D.id}-800x600.webp`} alt="floor" />
                </div>
                }
                
              </div>

              <aside className='property-contact'>

                  {data.agency && <div className='property-contact-owner'>
                    <img className='contact-owner-img' src={data.agency.logo.url} alt="Agency" />
                    <h5 className='contact-owner-name'>{data.agency.name}</h5>
                    {data.contactName && <p className='contact-para'><strong>Agent:</strong> {data.contactName}</p>}
                    {data.phoneNumber.mobile && <div className='more-info-about'>
                      <i className="fa fa-phone"></i>
                      <h5 className='inner-title'>Phone</h5>
                      <p className='contact-para'>{data.phoneNumber.mobile}</p>
                    </div>}
                </div>}

                <div className='property-contact-us'>
                  <h4 className='bottom-title'>Contact Us</h4>
                  <input className='contact-input' type='text' placeholder='Full Name'></input>
                  <input className='contact-input' type='email' placeholder='Email'></input>
                  <input className='contact-input' type='text' placeholder='Messages'></input>
                  <button className='contact-submit' type='submit'>Send Messages</button>
                </div>
              </aside>
            </section>
            {data.purpose && <Recommended recommendedData={recommendedData}/>}
          </main>
          <Footer />
        </>
  )
}