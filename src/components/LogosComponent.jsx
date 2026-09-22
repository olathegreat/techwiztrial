import React from 'react'
import "./LogosComponent.css"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"


function LogosComponent() {
  return (
   <section className='logos-component'>
       <h5>Trusted by over 50,000 suppliers</h5>

       <marquee className='logos-flex'>
        <img src={logo1} alt="logo 1" />
        <img  src={logo2} alt="logo 1" />
        <img src={logo3} alt="logo 1" />
        <img src={logo4} alt="logo 1" />
        <img src={logo5} alt="logo 1" />
        <img src={logo6} alt="logo 1" />
        

       </marquee>

   </section>
  )
}

export default LogosComponent