import './App.css';
import './Fonts/Roboto/Roboto-Regular.ttf';
import './Fonts/Roboto/Roboto-Bold.ttf';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css//bootstrap-utilities.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

import Navbar from'./Components/Navbar.js';
import Banner from './Components/Banner.js';
import Brands from './Components/Brands.js';
import Services from './Components/Services.js';
import Intro from './Components/Intro.js';
import Stats from './Components/Stats.js';
import Portfolio from './Components/Portfolio.js';
import GetStarted from './Components/GetStarted.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Brands/>
      <Services/>
      <Intro/>
      <Stats/>
      <Portfolio/>
      <GetStarted/>
      <Footer/>
    </>
  );
}

export default App;
