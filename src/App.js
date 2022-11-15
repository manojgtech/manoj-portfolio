import myimg from './img/me.jpg';
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
      
        <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-center">
          
        
          {/* <Link to='/' className="navbar-brand">
          <img src={myimg} alt="Avatar Logo"  className="rounded-pill myinglogo" /> 
           </Link> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Hello</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/journey">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
      
</nav>
        
      
      <div className='row'>
        <div className='col-md-2'>
        
        <nav className="navbar  navbar-dark bg-dark">
          
          <div className="container-fluid leftdiv">
          <Link to='/' className="navbar-brand">
          <img src={myimg} alt="Avatar Logo"  className="rounded-pill myinglogo" /> 
           </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
             <a href="mailto:coolntop.ray@gmail.com">Mail Us</a>
            </li>
            <li className="nav-item">
             <a href="https://www.linkedin.com/in/manoj-kumar-appcoder">Linkedin</a>
            </li>
            <li className="nav-item">
             <a href="https://github.com/manojgtech">Github</a>
            </li>
            
          </ul>
        </div>
</nav>


        </div>
        <div className='col-md-8'>
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<About />} />
        
    </Routes>
  
        </div>
      </div>
    </div>
  );
}

export default App;
