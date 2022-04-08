import React, { useState, useEffect } from 'react'
import api from '../services/api'

import './PropertiesForSale.css'

import { Link, useSearchParams } from 'react-router-dom'

export default function ListSearchedProperty() {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  const external = searchParams.get('locationExternalIDs');
  const purpose = searchParams.get('purpose');
  const categoryExternalID = searchParams.get('categoryExternalID') !== 'all' ? '&categoryExternalID=' + searchParams.get('categoryExternalID') : '';
  const roomsMin = searchParams.get('roomsMin') !== 'any' ? '&roomsMin=' + searchParams.get('roomsMin') : ''; 
  const sort = searchParams.get('sort') !== 'any' ? '&sort=' + searchParams.get('sort') : '';
  const titlePurpose = purpose === 'for-rent' ? 'Rent' : 'Sale'

  useEffect(() => {
    const fetchData = async () => {
        const response = await api.get(`/properties/list?locationExternalIDs=${external}&purpose=${purpose}&hitsPerPage=12&lang=en${sort}${categoryExternalID}${roomsMin}`)
        setData(response.data.hits)
    }

      fetchData();

  }, [external, purpose, sort, categoryExternalID, roomsMin])

  return (
          <div className="container-for-sale">
            <h1>{`Properties For ${titlePurpose}`}</h1>
            <div className='flex-container'>
            {data.map((data) => {
              const {title, contactName, baths, rooms, area, price, externalID, agency: {logo: {url: agencyLogo}}, coverPhoto: {url: coverPhoto} } = data;

              return (
                  <div className='card-properties'>
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