
import Slider from "react-slick";

import sliderImg1 from '../Images/sliderImg1.png';
import sliderImg2 from '../Images/sliderImg2.png';
import sliderImg3 from '../Images/sliderImg3.png';
import sliderImg4 from '../Images/sliderImg4.png';
import sliderImg5 from '../Images/sliderImg5.png';

export default function Portfolio(){
  
  var settings = {
  	className: "center",
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15px",
  };

  return(

  	<div className="portfolioContainer containerMargin">
      <div className="container">
        <div className="brandsHeading">
          <h2 className="headingMain">Explore Highly Innovative Content</h2>
          <p className="pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        </div>
      </div>
        <div className="portfolioSlider">
          	<Slider {...settings}>
		      <div>
		        <img src={sliderImg1} alt="img" />
		      </div>
		      <div>
		        <img src={sliderImg2} alt="img" />
		      </div>
		      <div>
		        <img src={sliderImg3} alt="img" />
		      </div>
		      <div>
		        <img src={sliderImg4} alt="img" />
		      </div>
		      <div>
		        <img src={sliderImg5} alt="img" />
		      </div>
		    </Slider>
	    </div>
    </div>

  )
}