import IntroImg1 from '../Images/IntroImg1.png';
import IntroImg2 from '../Images/IntroImg2.png';
import heart from '../Images/heart.png';

export default function Intro(){

  return(

    <div className="introContainer containerMargin">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="introImagesGridMain d-flex">
              <div className="introImagesGridBottom">
                <div className="introImage">
                  <img src={IntroImg1} alt="img" />
                </div>
                <p className="introImagesCaption"><img src={heart} alt="img" /> 95.6k Likes</p>
              </div>
              <div className="introImagesGridTop">
                <div className="introImage">
                  <img src={IntroImg2} alt="img" />
                </div>
                <p className="introImagesCaption"><img src={heart} alt="img" /> 95.6k Likes</p>
              </div>
            </div>
          </div>
          <div className="col">
            <h2 className="headingMain headingMainIntro">We Help You To Grow Your Social Presence</h2>
            <p className="pt-3">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
          </div>
        </div>
      </div>
    </div>

    )
}