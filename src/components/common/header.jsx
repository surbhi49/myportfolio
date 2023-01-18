import '../../assets/styles/index.css';
import { Link } from 'react-router-dom';



function Head(){
     return(
          <>
          
  <nav id="nav" class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span>S</span>urbhi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
     <div className="toggle">
      <span class="navbar-toggler-icon"></span>
      </div>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/service'}>Service</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/project'}>Project</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/slider'}>Team</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/blog'}>Blog</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact</Link>
          </li>       
        </ul>
      </div>
    </div>
  </div>
</nav>
          </>
     )
};

export default  Head;