import '../../assets/styles/index.css';
import {BsGithub } from "react-icons/bs";
// import {BsTwitter } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
 import {BsLinkedin} from 'react-icons/bs';
 import {BsSkype} from 'react-icons/bs';
 import {AiTwotoneMail} from 'react-icons/ai';  
import {AiOutlineArrowUp} from 'react-icons/ai';
import { Link } from 'react-router-dom';


function scrolltop() {
     window.scrollTo(0, 0);
 }

function Footer (){


     return(
          <>

          <section className='footer-section'>
      <Link to={"/https://github.com/@surbhi49"}> <BsGithub /></Link>
      <Link to={"/https://www.linkedin.com/in/surbhi-sahu-427667244"}>  <BsInstagram  /> </Link>
        <BsLinkedin   />
        <BsSkype />
           <AiTwotoneMail/> 
           <p>Copyright © 2020 - All Right Reserved.</p>
           <p>Designed by Cute Themes.</p>


            <div className='scroll-btn'  onClick={scrolltop}>
               <button><AiOutlineArrowUp/></button>
            </div>
           </section>
          </>
     )
};

export default Footer;