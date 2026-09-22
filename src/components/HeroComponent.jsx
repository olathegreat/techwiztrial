import React from 'react'
import heroImage from "../assets/herocar.png"
import "./HeroComponent.css"

function HeroComponent() {
  return (
    <div className='hero'>
        
        <div className='hero-left'>
          <h1 className='hero-left-header'>
           <span className='text-blue'>Easy</span>  Rentals, 
            Anywhere You Go

          </h1>

        </div>

        <div className='hero-right'>
          <img src={heroImage} alt="" />

        </div>

    </div>
  )
}

export default HeroComponent