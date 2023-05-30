import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGoogleplus } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import {
    Link
    } from "react-router-dom";
import "./style.scss"
export const Header = () => {
  return (
    <div>
     <div className="container">
     <nav>
           <div className="nav-left">
           <FiPhoneCall/><span>+880 1911 854 378</span>
            <HiOutlineMail/><span>backpiper.com@gmail.com</span>
           </div>
           <div className="nav-right">
            <div className="icon"><GrFacebookOption/></div>
           <div className="icon"> <AiOutlineTwitter/></div>
           <div className="icon"> <IoLogoGoogleplus/></div>
          <div className="icon">  <RiLinkedinLine/></div>
            <div className="icon"><FaPinterestP/></div>
           </div>
        </nav>
        <div className="nav">
            <div className="logo"><img src="https://preview.colorlib.com/theme/onepro/img/logo.png.webp" alt="" /></div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li>FEATURES</li>
                <li>SERVICE</li>
                <li>PORTFOLIO</li>
                <li>TEAM</li>
                <li>CLIENTS</li>
                <li>PRICING</li>
                <li>NEWS</li>
                <li><Link to="/add">CONTACT</Link></li>
            </ul>
        </div>
     </div>
    </div>
  )
}
