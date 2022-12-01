import infoImg1 from '../Images/infoImg1.png';
import infoImg2 from '../Images/infoImg2.png';
import infoImg3 from '../Images/infoImg3.png';
import infoImg4 from '../Images/infoImg4.png';


export default function Stats(){

  return(
    <>
    <div className="statsContainer containerMargin">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="statsHeading">
              <h2 className="headingMain">Our Numbers Tell More About Us</h2>
              <p className="pt-3">Sed ut perspiciatis unde ispa natus</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statCount countRed">
              <p>50,000+</p>
              <span>Brands</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statCount countPink">
              <p>80,000+</p>
              <span>Creators</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statCount countBlue">
              <p>150,000+</p>
              <span>Active Campaigns</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="infoContainer containerMargin">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h2 className="headingMain">Take Your Brand To The Next Level!</h2>
            <p className="pt-3">Lorem ipsum dolor sit amet adipiscing elit sed do et eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris set nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-md-7 text-lg-end">
            <div className="infoImageGrid">
              <div className="infoImageOne">
                <img src={infoImg1} alt="img" /> 
              </div>
              <div className="infoImageTwo">
                <img src={infoImg2} alt="img" /> 
              </div>
              <div className="infoImageThree">
                <img src={infoImg3} alt="img" /> 
              </div>
              <div className="infoImageFour">
                <img src={infoImg4} alt="img" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    )
}