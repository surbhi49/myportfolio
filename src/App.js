
import './App.css';

import Head from './components/common/header.jsx';
import Home from './components/pages/landing-page/home';
import About from './components/pages/landing-page/about';
import Service  from './components/pages/landing-page/service';
import Project from './components/pages/landing-page/project';
import Slider from './components/pages/landing-page/slider';
import Blog from './components/pages/landing-page/blog';
import Contact from './components/pages/landing-page/contact';
import Footer from './components/common/footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return <>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}
export default App;
