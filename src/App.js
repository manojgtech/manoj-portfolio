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
      <div className='row'>
        <div className='col-md-2'>
        
        <nav className="navbar navbar-dark">
          
          <div className="container-fluid leftdiv">
          <Link to='/' className="navbar-brand">
          <img src={myimg} alt="Avatar Logo"  className="rounded-pill myinglogo" /> 
           </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
</nav>


        </div>
        <div className='col-md-8'>
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        
    </Routes>
  
        </div>
      </div>
    </div>
  );
}

export default App;
