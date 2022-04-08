import React from 'react'
import AgentPhoto from '../assets/agent.jpg'

import AgentInfo1 from '../assets/agent/1.png'
import AgentInfo2 from '../assets/agent/2.png'
import AgentInfo3 from '../assets/agent/3.png'


import './Agent.css'

export default function Agent() {
  
  return (
    <div className="container-agent">
      <img className="agent-img" src={AgentPhoto} alt="Follow steps make dream"></img>
      <div className="agent-description">
        <h1>Follow steps make dream</h1>
        <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
        <div className='agent-details'>
          <div className='container-img'><img src={AgentInfo1} alt="Sell, Rent Property Free"></img></div>
          <div className='agent-info'>
            <h3>Sell, Rent Property Free</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eros quam. Sed sit amet dictum est, at fringilla enim Praesent. </p>
          </div>
        </div>
        <div className='agent-details'>
        <div className='container-img'><img src={AgentInfo2} alt="In-depth Info on Investment Hotspots"></img></div>
          <div className='agent-info'>
            <h3>In-depth Info on Investment Hotspots</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eros quam. Sed sit amet dictum est, at fringilla enim Praesent. </p>
          </div>
        </div>
        <div className='agent-details'>
        <div className='container-img'><img src={AgentInfo3} alt="Pool of Best Property Options"></img></div>
          <div className='agent-info'>
            <h3>Pool of Best Property Options</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eros quam. Sed sit amet dictum est, at fringilla enim Praesent. </p>
          </div>
        </div>
      </div>
    </div>
  )
}