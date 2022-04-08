import React from 'react'

export default function Description({ description }) {
  const regexRemoveHTML = /(<([^>]+)>)/ig
  const updateDescription = description.replace(regexRemoveHTML, '')
  
  return (
    <div className='property-details-description'>
      <h3 className='property-details-description-title'>Description</h3>
      <p className='description-text'>{updateDescription}</p>
    </div>
  )
}