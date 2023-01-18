import '../../../assets/styles/index.css';

import one from "../../../assets/images/camera1.jpg";
import two from "../../../assets/images/mobile1.jpg";
import three from "../../../assets/images/watch1.jpg";
import four from "../../../assets/images/headphone1.jpg";
import five from "../../../assets/images/camera2.jpg";
import six from "../../../assets/images/mobile2.jpg";
import seven from "../../../assets/images/watch2.jpg";
import eight from "../../../assets/images/headphone2.jpg";
import nine from "../../../assets/images/camera3.jpg";
import ten from "../../../assets/images/mobile3.jpg";
import ele from "../../../assets/images/watch3.jpg";
import twe from "../../../assets/images/headphone3.jpg";
import thr from "../../../assets/images/mobile4.jpg";
import fou from "../../../assets/images/watch4.jpg";
import fiv from "../../../assets/images/headphone4.jpg";
import $ from "jquery";




$(document).ready(function(){
 $('.list').click(function(){

   const value = $(this).attr('data-filter');
      if(value =='all'){
            $('.itembox').show('1000');
           
      }
      else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
          
      }

 })  
 $('.list').click(function(){
$(this).addClass('active').siblings().removeClass('active');


 })
 
})



function Project(){
     
     
     return(
          <>
            <section className='recent-project'>
                 <h1>Recent - Project</h1>

                 <div className='top-nav'>

                    
                         <button   className='list active'  data-filter='all'>All</button>
                         <button   className='list'  data-filter='camera' >Branding</button >
                         <button  className='list'   data-filter='mobile' >Web-design</button >
                         <button  className='list'   data-filter='watch' >Photograpghy</button >
                         <button  className='list'   data-filter='headphone' >Hobbies</button >
            
                 </div>
            
              <div class="project-container">
							<div id="wrapper" className="all branding webdesign" >
					<div className='itembox camera '>
                              <img src={one} alt="" />
                              </div>		
					</div>

					<div id="wrapper" className="all branding webdesign" >
					<div className='itembox mobile '>
                              <img src={two} alt="" />
                              </div>	
					</div>
                               

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox watch'>
                              <img src={three} alt="" />
                              </div>	
					</div>

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox  headphone'>
                              <img src={four} alt="" />
                              </div>	
					</div>


					<div id="wrapper" className=" all photography" >
                              <div className='itembox camera'>	
                              <img src={five} alt="" />
					</div>		
					</div>
				
					<div id="wrapper" className=" all branding webdesign" >
                              <div className='itembox mobile'>	
                              <img src={six} alt="" />
						</div>	
						
					</div>
				
					<div id="wrapper" className=" all branding webdesig photographyn" >
					<div className='itembox watch'>	
                              <img src={seven} alt="" />
                              </div>	
					</div>
				
					<div id="wrapper" className=" all webdesign photography" >
                              <div className='itembox headphone'>
                              <img src={eight} alt="" />
					</div>		
					</div>
					
					<div id="wrapper" className=" all webdesign photography">
                              <div className='itembox camera'>
                              <img src={nine} alt="" />
						</div>	
					</div>

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox mobile'>
                              <img src={ten} alt="" />
                              </div>	
					</div>
                              
                              <div id="wrapper" className="all branding webdesign" >
					<div className='itembox watch'>
                              <img src={ele} alt="" />
                              </div>	
					</div>
                                 

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox headphone'>
                              <img src={twe} alt="" />
                              </div>	
					</div>
                               

                              <div id="wrapper" className=" all photography" >
                              <div className='itembox camera'>	
                              <img src={five} alt="" />
					</div>		
					</div>

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox mobile'>
                              <img src={thr} alt="" />
                              </div>	
					</div>
                             
                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox watch'>
                              <img src={fou} alt="" />
                              </div>	
					</div>
                             

                              <div id="wrapper" className=" all branding webdesign" >
					<div className='itembox headphone'>
                              <img src={fiv} alt="" />
                              </div>	
					</div>

                        
				</div>
              
                <div className='project-btn'>
                    <button>Previous project</button>
                </div>
            </section>

          </>
     )
};


export default Project;