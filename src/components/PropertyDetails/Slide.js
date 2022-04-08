import React, { useState } from 'react'

export default function Slide({ photos }) {

  const [index, setIndex] = useState(0)

  function handleNextClick() {
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const slidePhotos = photos[index]

  return (
    <div className='property-slide'>
      <img className='slide-image' src={slidePhotos.url} alt={slidePhotos.title} loading="lazy" />
      <div className='nav-carousel'>
        <div onClick={handlePreviousClick} className='prev-left'>
          <i className="fas fa-angle-left"></i>
        </div>
        <div onClick={handleNextClick} className='prev-right'>
          <i className="fas fa-angle-right"></i>
        </div>  
    </div>
    </div>
  )
}