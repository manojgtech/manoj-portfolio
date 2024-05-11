
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
// route
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
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
                <li><NavLink class="active" to="">Hello</NavLink></li>
                <li><NavLink  to="/about">About</NavLink></li>
                 <li><NavLink to="/resume">Resume</NavLink></li>
                 <li><NavLink to="/projects">Projects</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
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
      <Route path="/contact" element={<Contact />} />
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
