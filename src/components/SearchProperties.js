import React, { useState } from 'react'
import { autocomplete } from '../services/Autocomplete'

import { useNavigate } from 'react-router-dom'

import './SearchProperty.css'
/* 
    [x] Array de dados para fazer a query
    [x] Pegar o input onChange
    [x] Filtrar esse array de acordo com o input do search
    [x] Mostrar a lista de dados do array filtrado
    [x] Pegar o innerText da lista e colocar no input
    [x] Pegar o id relacionado para fazer a busca
    [x] Adicionar uma classe de acordo com o indice do array que mudar com KeyUp e KeyDown; 
*/

export default function SearchProperties() {

  const [forBuy, setForBuy] = useState(true);
  const [location, setLocation] = useState('');
  const [showAutoComplete, setShowAutoComplete] = useState(false)
  const [filterLocation, setFilterLocation] = useState([]);
  const [externalID, setExternalID] = useState('');
  const [keyIndex, setKeyIndex] = useState(0);
  const [propertyType, setpropertyType] = useState('all')
  const [anyRooms, setAnyRooms] = useState('any')
  const [anyPrice, setAnyPrice] = useState('any')

  const navigate = useNavigate();

  const handleBuyRentBtn = () => {
    setForBuy(!forBuy)
  }

  const suggestions = (input) => {
    return autocomplete.filter(el => el.name.toLowerCase().indexOf(input.toLowerCase()) > -1)
  }

  const handleLocation = (e) => {
    const userInput = e.target.value;
    const filterLocation = (suggestions(userInput));

    if (e.target.value.length > 0) {
      setLocation(e.target.value)
      setShowAutoComplete(true)
      setKeyIndex(0);
    } else {
      setLocation('')
      setShowAutoComplete(false)
    }

    setFilterLocation(filterLocation)

    if (filterLocation.length === 0) {
      setShowAutoComplete(false)
    }

  }

  const handleInnerText = (e, index) => {
    const listText = e.target.innerText;
    let propertyExternalID = '';

    for (let i = 0; i < filterLocation.length; i++) {
      if (i === index) {
        propertyExternalID = filterLocation[i].externalID;
      }
    }

    setLocation(listText)
    setShowAutoComplete(false)
    setExternalID(propertyExternalID)
  }

  const handleKey = (e) => {
    if (e.key === 'ArrowUp') {
      if (keyIndex === 0) {
        setKeyIndex(filterLocation.length -1)
      } else {
        setKeyIndex(keyIndex -1)
      }
    }
    if (e.key === 'ArrowDown') {
      if (keyIndex === filterLocation.length -1) {
        setKeyIndex(0)
      } else {
        setKeyIndex(keyIndex + 1)
      }
    }
    if (e.key === 'Enter') {
      setLocation(filterLocation[keyIndex].name);
      setExternalID(filterLocation[keyIndex].externalID);
      setShowAutoComplete(false);
      setKeyIndex(0);
    }
  }

  const handlePropertyType = (e) => {
    setpropertyType(e.target.value);
  }

  const handleAnyRooms = (e) => {
    setAnyRooms(e.target.value);
  }

  const handleAnyPrice = (e) => {
    setAnyPrice(e.target.value)
  }

  const handleSubmit = (e) => {

    if (location === '' || externalID === '') {
      e.preventDefault();
      console.log("Invalid search") 
    } else {
      const forBuyOrRent = forBuy ? "for-sale" : "for-rent"
      const searchParams = `?locationExternalIDs=${externalID}&purpose=${forBuyOrRent}&sort=${anyPrice}&categoryExternalID=${propertyType}&roomsMin=${anyRooms}`
      navigate(`/search/${searchParams}`);
  
      return e.preventDefault(); 
    }
  }

  return (
    <div className='search'>
    <div className='toggle-btn'>
      <button onClick={handleBuyRentBtn} className={forBuy ? 'for-buy-btn for-buy-rent-focus' : 'for-buy-btn'}>For Buy</button>
      <button onClick={handleBuyRentBtn} className={forBuy ? 'for-rent-btn' : 'for-rent-btn for-buy-rent-focus'}>For Rent</button>
    </div>
    <div className='search-aucomplete'>
    <form className='search-properties' onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Location E.g. (Abu Dhabi)'
        name="location"
        value={location}
        onChange={handleLocation} 
        onKeyDown={handleKey}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
      />
        <select className="select1" value={propertyType} onChange={handlePropertyType}>
          <option value="all">All Properties</option>
          <option value="4">Apartment</option>
          <option value="16">Townhouses</option>
          <option value="3">Villas</option>
          <option value="18">Penthouses</option>
        </select>
        <select className="select2" value={anyRooms} onChange={handleAnyRooms}>
          <option value="any">Any Rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
        <select className="select3" value={anyPrice} onChange={handleAnyPrice}>
          <option value="any">Any Price</option>
          <option value="price-asc">Lowest Price</option>
          <option value="price-desc">Highest Price</option>
        </select>
        <input className="search-submit" type="submit" value="SEARCH NOW"/>
      </form>
       {showAutoComplete &&
        <ul className="search-suggestions">
          {filterLocation.map((element, index) => {

          return <li className={keyIndex === index ? "select-suggestion" : ""} onClick={(e) => handleInnerText(e, index)} key={element.id}>{element.name}</li>
          })}
        </ul>
        }
        </div> 
    </div>
  )
}