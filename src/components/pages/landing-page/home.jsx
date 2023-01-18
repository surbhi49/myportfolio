
import { useState } from "react";
import '../../../assets/styles/index.css';
import {FiFacebook } from "react-icons/fi";
import {BsTwitter } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
 import {BsLinkedin} from 'react-icons/bs';
 import {BsSkype} from 'react-icons/bs';
 import {AiTwotoneMail} from 'react-icons/ai';  
import About from '../../pages/landing-page/about';
import Service from '../../pages/landing-page/service';
import Project from './project';
import Contact from './contact';
import Blog from './blog';
import Slider from './slider';
import { Link } from 'react-router-dom';






    
 const mystyle ={
     color: "white",
     marginLeft:"15px",
     fontSize:"1em",
     marginTop:"1em"
}
const styles ={
     marginLeft:"0",
     color: "white",
     fontSize:"1em",
     marginTop:"1em"
}
function Home()


{                   
     const [name, setName] = useState("Surbhi");
   

     return(
          <>
          <div className='bg-img'>   
          <div className="overlay">
            <div className='detail'>
               <h3>WELCOME TO MY WEBSITE</h3>
               <div className='text'><span>I'M</span><br></br><h1 id='name' className=" animate__animated animate__flash"  onClick={() =>setName("Front end Developer")}>{name}</h1></div>
               <div className='icons'>
               <FiFacebook  style={styles} />
       
       <BsTwitter style={mystyle}  />
        <BsInstagram  style={mystyle}/>
        <BsLinkedin  style={mystyle} />
        <BsSkype style={mystyle}/>
           <AiTwotoneMail style={mystyle}/> 
               </div>
               <div className='two-btn'>
               <Link to="/project">  <button>View work</button></Link>
               <Link to="/contact">   <button>Hire me</button></Link>

           </div>

            </div>
            </div>
          </div>

        <About/>
        <Service/>
        <Project/>
        <Blog/>
        <Slider/>   
        <Contact/>


          </>
     )
};

export default Home;