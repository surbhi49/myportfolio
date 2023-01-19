import '../../../assets/styles/index.css';
import img from '../../../assets/images/about.jpg';
import resume from '../../../assets/images/surbhi-sahu-1.pdf';
import { Link } from 'react-router-dom';


function About(){


     return(
          <>
          <section>
          <h1>About Me</h1>
          <div className='about'>
           <div className='one-side'>
               <img src={img} alt="Girl in a jacket" />
           </div>   
           <div className="second-side">
               <h3>I am <span>Surbhi Sahu</span></h3>
             <h6>WEB DEVELOPER & DESIGNER</h6>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='btnn'>
          <Link to={resume}><button>Download my CV</button></Link>
           </div>
               </div> 
          </div>
          </section>
          </>
     )
}

export default About;