import React, { useState, useEffect, useRef } from 'react'
import api from '../services/api'

import './PropertiesForRent.css'

import { Link } from 'react-router-dom'

export default function PropertiesForRent() {
  const [data, setData] = useState([])

  const carousel = useRef(null)

  const handleLeftClick = (event) => {
    event.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }

  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carousel)

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9&page=0&lang=en')
      setData(response.data.hits)
    }

      fetchData();

  }, [])


  return (
          <div className="container-for-rent">
            <h1>Properties For Rent</h1>

            <div ref={carousel} className='flex-container-rent'>
            {data.map((data, index) => {
              const {title, contactName, baths, rooms, area, price, externalID, agency: {logo: {url: agencyLogo}}, coverPhoto: {url: coverPhoto} } = data;

              return (index === 0 || index %3 === 0) ? (
                 <div key={title} className="container-feature-rent">
                  <div className="feature-image-rent">
                    <img className='feature-image-size-rent' src={coverPhoto} alt="Feature"></img>
                    <div className="feature-overlay-rent"></div>
                  </div>
                  <div className="feature-info-rent">
                    <Link to={{pathname: `/details/${externalID}`}} className='title-link-rent'><h2 className='feature-title-rent'>{title.substring(0, 42)}...</h2></Link>
                    <div className='feature-details-rent'>
                      <strong className='feature-price-rent'>${price}</strong> <span className='feature-more-info-rent'>{rooms} Bed, {baths} Bath, Flats. Area {area.toFixed(2)} sqft</span>
                    </div>
                  </div>
              </div>
              
              )
                : (
                  <div key={title} className='card-properties-rent'>
                    <img className="card-img-rent" src={coverPhoto} alt="feature"></img>
                      <div className='card-details-rent'>
                        <div className='contact-rent'><i className="fa fa-user"></i><span className='contact-name-rent'>{contactName}</span></div>
                        <Link to={{pathname: `/details/${externalID}`}} className="card-title-rent">{title.substring(0, 42)}...</Link>
                        <div className="agency-logo-rent" ><a href='#'><img src={agencyLogo} alt="Agency"></img></a></div>
                        <strong className='price-rent'>${price}</strong>
                        <div className='card-property-details-rent'>
                        <span className='card-details-info-rent'><i className="fas fa-bed"></i> {rooms} Bed</span>
                          <span className='card-details-info-rent'><i className="fas fa-bath"></i> {baths} Bath</span>
                          <span className='card-details-info-rent'><i className="far fa-vector-square"></i> {area.toFixed(2)} sq.</span>
                        </div>
                      </div>
                  </div>
              )
            })}
            </div>
            <div className='nav-carousel'>
              <div onClick={handleLeftClick} className='prev-left'>
                <i className="fas fa-angle-left"></i>
              </div>
              <div onClick={handleRightClick} className='prev-right'>
                <i className="fas fa-angle-right"></i>
              </div>  
            </div>
          </div>
  )
}