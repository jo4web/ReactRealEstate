import React from 'react'

export default function Amenities({ amenities }) {

  const updateAmenities = []

  if (amenities.length) {
    for (let i = 0; i < amenities.length; i++) {
      for (let j = 0; j < amenities[i].amenities.length; j++) {
        updateAmenities.push({text: amenities[i].amenities[j].text, external: amenities[i].amenities[j].externalID})
      }
    }
  }

  return updateAmenities.length ? (
    <div className='property-details-amenities'>
      <h3 className='amenities-title'>Amenities</h3>
      <ul className='property-details-amenities-ul'>
        {updateAmenities.map((amenities) => {
            return (
              <li key={amenities.external.toString()} className='amenities-list'><i className="fa fa-check"></i>{amenities.text}</li>
            )
          })
        }
      </ul>
    </div>
  ) : <></>
}