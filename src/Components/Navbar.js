import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

export default function Navbar(){
  return(
    <Router>
    <div className="navigationMain">
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">Influencers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Brands</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="button-group headerBtns">
            <button className="btn btnHeaderOutline btn-outline-success me-2" type="submit">Log in</button>
            <button className="btn btnHeaderSolid btn-outline-success" type="submit">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
    </Router>
)
}