import bannerImage from '../Images/bannerImg.png';

export default function Banner(){

  return(
    <div className="container">
      <div className="bannerMain">
        <div className="row">
          <div className="col-md-5 align-self-center">
            <div className="bannerContent">
              <h1>Where <span className="bannerHeadingBold clrYellow">Brands</span> <br/> Meets <span className="bannerHeadingBold">Creators</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="btn btnBlack" type="submit">Get Started Now</button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="bannerImage">
              <img src={bannerImage} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}