import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div className='section-home text-center'>
            <h3>Hello <span className='text-primary'>I am</span></h3>
            <h1 className='text-info'>Manoj Kumar Gupta</h1>
            <h3>FullStack Software Developer</h3>
            <p>
                I have more then 6 year exeperience in web developemnt on <br/> variaus plateforms.I have worked on both fronend and backend <br/> technologies.
            </p>
            <div className='btn-group'>
                  <button className='btn btn-info'><Link to="/contact">Contact me</Link></button>&nbsp;&nbsp;&nbsp;<button className='btn btn-primary'><Link to="/contact">My CV</Link></button>
            </div>
        </div>
    );
}

export default Home;
