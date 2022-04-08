import React, { useState, useEffect } from 'react'
import api from '../services/api'

import './PropertiesForSale.css'

import { Link } from 'react-router-dom'

export default function PropertiesForSale() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12&page=0&lang=en')
      
      setData(response.data.hits)
    }

      fetchData();

  }, [])

  return (
          <div className="container-for-sale">
            <h1>Properties For Sale</h1>
            <div className='flex-container'>
            {data.map((data) => {
              const {title, contactName, baths, rooms, area, price, externalID, agency: {logo: {url: agencyLogo}}, coverPhoto: {url: coverPhoto} } = data;

              return (
                  <div key={externalID} className='card-properties'>
                    <img className="card-img" src={coverPhoto} alt="feature"></img>
                      <div className='card-details'>
                        <div className='contact'><i className="fa fa-user"></i><span className='contact-name'>{contactName}</span></div>
                        <Link to={{pathname: `/details/${externalID}`}} className="card-title">{title.substring(0, 42)}...</Link>
                        <div className="agency-logo" ><a href='#'><img src={agencyLogo} alt="Agency"></img></a></div>
                        <strong className='price'>${price}</strong>
                        <div className='card-property-details'>
                        <span className='card-details-info'><i className="fas fa-bed"></i> {rooms} Bed</span>
                          <span className='card-details-info'><i className="fas fa-bath"></i> {baths} Bath</span>
                          <span className='card-details-info'><i className="far fa-vector-square"></i> {area.toFixed(0)} sq.</span>
                        </div>
                      </div>
                  </div>
              )
            })}
            </div>
          </div>
  )
}