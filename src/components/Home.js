import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <section id="hero" class="d-flex align-items-center">
          <div class="container d-flex flex-column align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100"><h1>Er. Manoj Kumar Gupta</h1>
          <h2>I'm a professional Full Stack Software Developer from Noida</h2>
           <Link to="/about" className="btn-about">About Me</Link>
           </div>
           </section>
    );
}

export default Home;
