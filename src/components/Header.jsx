import React from 'react'
import Logo from '../img/logo.svg'

import { Link } from 'react-router-dom'

//import COMPONENT
import HeaderNav from "./HeaderNav"


function header() {
   return (
      <>
         <nav className="navbar main-nav navbar-expand-lg px-2 pt-0 pb-2 customeNavBar border-bottom active">
            <div className="container">
               <Link className="navbar-brand" to="/"><img src={Logo} alt="Evolv" className="brandImg" /></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="ti-menu"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarNav">

                     <HeaderNav/>

               </div>

           

            </div>


         </nav>



      </>
   )
}

export default header