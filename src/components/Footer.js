import React from 'react'
import { Link } from 'react-router-dom'
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoInstagramAlt} from "react-icons/bi"


const Footer = () => {
  return (
   <div className="container">
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"></svg>
            </Link>
            <span className="text-white">© 2023 FoodApp, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <BiLogoFacebook className='ms-3' size={24} color='#fff'/>
            <BiLogoTwitter className='ms-3' size={24} color='#fff'/>
            <BiLogoInstagramAlt className='ms-3' size={24} color='#fff'/>
        </ul>
    </footer>
   </div>
  )
}

export default Footer
