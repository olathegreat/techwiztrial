import React from 'react'
import Logo from "../assets/logo.png" 
import UserIcon from "../assets/usericon.png"
import MenuIcon from "../assets/menuicon.png"
import "./Nav.css"

function Nav() {

   const clickFunction =  () =>{

    alert("clicked");
   }

  return (
    <nav className='nav'>

        <div className='nav-left'>
            <img src={Logo} alt='logo image'/>

        </div>

        <div className='nav-right'>
             <div className='signin'>
                <img src={UserIcon} alt="" />
                <span>Sign In</span>

             </div>

             <img onClick={clickFunction} src={MenuIcon} alt=''/>

        </div>

    </nav>
  )
}

export default Nav