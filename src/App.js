
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      
      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <h1 class="logo me-auto me-lg-0">
            <a href="/">Er. Manoj Kumar Gupta</a></h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li><Link class="active" to="/">Hello</Link></li>
                <li><Link  to="/about">About</Link></li>
                 <li><a href="/resume">Resume</a></li>
                 <li><a href="/projects">Projects</a></li>
                {/*<li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li> */}
                </ul> 
                <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div class="header-social-links"> 
                  <a href="https://github.com/manojgtech" class="instagram" target='_blank'><i class="fa-brands fa-github"></i></a> 
                  <a href="https://www.linkedin.com/in/manoj-kumar-appcoder/" class="linkedin" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                  </div>
                  </header>
        
      
     <main className="maidiv" style={{color:'#fff'}}>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/manoj-portfolio" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
     </main>
    
    <footer id="footer">
      <div class="container">
        <div class="copyright"> © Copyright <strong><span>Manoj Kumar</span>
        </strong>. All Rights Reserved</div>
      </div></footer>


       
       
    </div>
  );
}

export default App;
