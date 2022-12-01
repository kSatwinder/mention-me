import React from "react";
import Logo from '../Images/Logo.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import youtube from '../Images/youtube.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Footer(){

  return(
    <Router>
    <div className="footer text-center">
      <div className="container">
        <div className="footerLogo">
           <img src={Logo} alt="logo" />
        </div>
        <div className="footerNavigation">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Community Guidelines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="socialLinks">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="#"><img src={facebook} alt="fb" /></Link>
            </li>
            <li className="nav-item">
              <Link to="#"><img src={youtube} alt="youtube" /></Link>
            </li>
            <li className="nav-item">
              <Link to="#"><img src={instagram} alt="instagram" /></Link>
            </li>
          </ul>
          <p className="footerTagLine">© 2021 Mention Me. All Rights Reserved.</p>
        </div>
      </div>
    </div>
    </Router>
  )
}