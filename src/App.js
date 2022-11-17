
import './App.css';
import Home from './components/Home';
import About from './components/About';
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
            <a href="index.html">Manoj Kumar</a></h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li><Link class="active" to="/">Hello</Link></li>
                <li><Link  to="/about">About</Link></li>
                {/* <li><a href="resume.html">Resume</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li> */}
                </ul> 
                <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div class="header-social-links"> 
                <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                 <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#" class="instagram"><i class="fa-brands fa-github"></i></a> 
                  <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                  </div>
                  </header>
        
      
     <main className="maidiv">
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        
    </Routes>
     </main>
    
    <footer id="footer">
      <div class="container">
        <div class="copyright"> © Copyright <strong><span>Kelly</span>
        </strong>. All Rights Reserved</div>
      </div></footer>


       
       
    </div>
  );
}

export default App;
