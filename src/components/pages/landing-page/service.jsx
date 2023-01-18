import '../../../assets/styles/index.css';
import web from '../../../assets/images/web-dev.png';
import responsive from '../../../assets/images/reponsive.png';
import photo from '../../../assets/images/photo.png';
import react from '../../../assets/images/react.png';
import comm from '../../../assets/images/communication.png';
import market from '../../../assets/images/market.png';
 function Service(){

     return(
          <>
            <section className='service-section'>
          <h1>My Service</h1>
          <div class="container">
			<div class="row">
			</div>
			<div class="service-content">
				<div class="row">
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-display1"></i> 
								</div>
								<div class="services-text">
                                        <div className='img'>
                                        <img src={web}></img>
                                        </div>
									<h3>Web Development</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-target"></i> 
								</div>
								<div class="services-text">
                                        <div className='img'>
                                        <img src={responsive}></img>
                                        </div>
									<h3>Responsive Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-camera"></i> 
								</div>
								<div class="services-text">
                                        <div className='img'>
                                        <img src={photo}></img>
                                        </div>
									<h3>Photographer</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-tools"></i> 
								</div>
								<div class="services-text">
                                        <div className='img'>
                                        <img src={react}></img>
                                        </div>
									<h3>React Developer</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-share"></i> 
								</div>
								<div class="services-text">
                                        <div className='img'>
                                        <img src={comm}></img>
                                        </div>
									<h3>Fast Communication</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 services-item">
						<div class="single-services-box">
							<div class="single-services">
								<div class="services-icon"> <i class="pe-7s-edit"></i> 
								</div>
								<div class="services-text">
                                             <div className='img'>
                                        <img src={market}></img>
                                        </div>
									<h3>Market Analysis</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
          </section>
          </>
     )
 };


 export default Service;

