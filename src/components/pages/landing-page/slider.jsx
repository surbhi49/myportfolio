import '../../../assets/styles/index.css';
import men from '../../../assets/images/men.jpg';
import women from '../../../assets/images/women.jpg';
import girl from '../../../assets/images/girl.jpg';

function Slider(){

     return(
          <>
        

        <section className='slider-section'>
        <h1>TESTIMONIALS</h1>
          <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  
  <div class="carousel-inner">
 
    <div class="carousel-item active">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. enim ad minim veniam, quis nostrud exercitation laboris.</p>
      <img src={men} class="d-block w-100" alt="men"/>
  
    </div>
    <div class="carousel-item">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. enim ad minim veniam, quis nostrud exercitation laboris.</p>
      <img src={women} class="d-block w-100" alt="women"/>
      
    </div>
    <div class="carousel-item">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. enim ad minim veniam, quis nostrud exercitation laboris.</p>
      <img src={girl} class="d-block w-100" alt="women"/>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
         </>
     )
};


export default Slider;