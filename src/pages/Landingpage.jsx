import React from 'react'

import "./LandingPage.css"
import Nav from '../components/Nav'
import HeroComponent from '../components/HeroComponent'
import LogosComponent from '../components/LogosComponent'
import RentalComponent from '../components/RentalComponent'

function Landingpage() {
  return (
   <div className='landing-page'>
    <Nav/>
    <HeroComponent/>
    <LogosComponent/>
    <RentalComponent/>

   </div>
  )
}

export default Landingpage