import React from 'react'

export default function MoreInfo({ rooms, baths, area }) {
  return (
    <div className='property-details-more-info'>
      <div className='property-details-inner-info'>
        <h4 className='property-details-inner-info-title'>Bedrooms</h4>
        <span className='property-details-inner-info-about'><i className="fas fa-bed"></i> {rooms}</span>
      </div>
      <div className='property-details-inner-info'>
        <h4 className='property-details-inner-info-title'>Bathrooms</h4>
        <span className='property-details-inner-info-about'><i className="fas fa-bath"></i> {baths}</span>
      </div>
      <div className='property-details-inner-info'>
        <h4 className='property-details-inner-info-title'>Area</h4>
        <span className='property-details-inner-info-about'><i className="far fa-vector-square"></i> {area.toFixed(0)} sq.</span>
      </div>
  </div>
  )
}