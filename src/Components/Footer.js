import React from "react";
import Logo from '../Images/Logo.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import youtube from '../Images/youtube.png';

export default function Footer(){

  return(
    <div className="footer text-center">
      <div className="container">
        <div className="footerLogo">
           <img src={Logo} alt="logo" />
        </div>
        <div className="footerNavigation">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Community Guidelines</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="socialLinks">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#"><img src={facebook} alt="fb" /></a>
            </li>
            <li className="nav-item">
              <a href="#"><img src={youtube} alt="youtube" /></a>
            </li>
            <li className="nav-item">
              <a href="#"><img src={instagram} alt="instagram" /></a>
            </li>
          </ul>
          <p className="footerTagLine">© 2021 Mention Me. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}