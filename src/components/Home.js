import React from 'react';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <section id="hero" class="d-flex align-items-center" style={{color: "#fff"}}>
          <div class="container d-flex flex-column align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100"><h1>Er. Manoj Kumar Gupta</h1>
          <h2>I'm a professional Full Stack Software Developer</h2>
          <p>
          Experienced Web Developer | PHP | MySQL | React | Laravel | Node JS | CodeIgniter
Hello there! I'm  a results-driven web developer with 7 years of experience in the dynamic world of web development. My passion for coding and problem-solving has led me to specialize in a range of technologies, including PHP, MySQL, React, Laravel, and CodeIgniter.
          </p>
           <Link to="/about" className="btn-about">About Me</Link>
           </div>
           </section>
    );
}

export default Home;
