import serviceIcon1 from '../Images/service_icon1.png';
import serviceIcon2 from '../Images/service_icon2.png';
import serviceIcon3 from '../Images/service_icon3.png';
import serviceIcon4 from '../Images/service_icon4.png';

export default function Services(){

  return(
  <div className="servicesContainer containerMargin">
  	<div className="container">
  		<div className="brandsHeading">
        <h2 className="headingMain">Nemo enim ipsam quia voluptas</h2>
        <p className="pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      </div>
      <div className="row">
      	<div className="col serviceGrid mt-4">
      		<div className="serviceIcon">
      			<img src={serviceIcon1} alt="icon" />
      		</div>
      		<div className="serviceContent">
      			<h5>Secure Payments</h5>
      			<p>Sed nostrud unde natus ent quis sit voluptatem aute.</p>
      		</div>
      	</div>
      	<div className="col serviceGrid mt-4">
      		<div className="serviceIcon">
      			<img src={serviceIcon2} alt="icon" />
      		</div>
      		<div className="serviceContent">
      			<h5>No Set Up Costs</h5>
      			<p>Sed nostrud unde natus ent quis sit voluptatem aute.</p>
      		</div>
      	</div>
      	<div className="col serviceGrid mt-4">
      		<div className="serviceIcon">
      			<img src={serviceIcon3} alt="icon" />
      		</div>
      		<div className="serviceContent">
      			<h5>Useful Insights</h5>
      			<p>Sed nostrud unde natus ent quis sit voluptatem aute.</p>
      		</div>
      	</div>
      	<div className="col serviceGrid mt-4">
      		<div className="serviceIcon">
      			<img src={serviceIcon4} alt="icon" />
      		</div>
      		<div className="serviceContent">
      			<h5>Visitors Analysis</h5>
      			<p>Sed nostrud unde natus ent quis sit voluptatem aute.</p>
      		</div>
      	</div>
      </div>
  	</div>
  </div>
  )
}