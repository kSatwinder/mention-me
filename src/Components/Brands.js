import brandLogo1 from '../Images/brandLogo1.png';
import brandLogo2 from '../Images/brandLogo2.png';
import brandLogo3 from '../Images/brandLogo3.png';
import brandLogo4 from '../Images/brandLogo4.png';
import brandLogo5 from '../Images/brandLogo5.png';


export default function Brands(){

  return(

    <div className="brandsContainer containerMargin">
      <div className="container">
        <div className="brandsHeading">
          <h2 className="headingMain">The Most Trusted Brands</h2>
        </div>
        <div className="row brandsLogo">
          <div className="col">
            <img src={brandLogo1} alt="brand logo" />
          </div>
          <div className="col">  
            <img src={brandLogo2} alt="brand logo" />
          </div>
          <div className="col">  
            <img src={brandLogo3} alt="brand logo" />
          </div>
          <div className="col">  
            <img src={brandLogo4} alt="brand logo" />
          </div>
          <div className="col">  
            <img src={brandLogo5} alt="brand logo" />
          </div>
          <div className="col">  
            <img src={brandLogo2} alt="brand logo" />
          </div>
        </div>
      </div>
    </div>
    )
}