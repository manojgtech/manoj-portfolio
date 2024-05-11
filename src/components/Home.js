import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <section id="hero" class="d-flex align-items-center" style={{color: "#fff"}}>
          <div class="container d-flex flex-column align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100"><h1>Er. Manoj Kumar Gupta</h1>
          <h3 style={{color:'red',textShadow:'black'}}><em>PHP | Codeigniter | Laravel | React | Node | Mysql | Javascript</em></h3>
          <h2>I'm a passionate software developer with 7 years of experience crafting creative and functional web applications</h2>
          <p>I specialize in full-stack development, leveraging my expertise in :</p>
          <ul>
            <li>Backend Development: PHP for robust server-side logic and data management.</li>
            <li>API Development: Node.js for building efficient and scalable APIs.</li>
            <li>Frontend Development: React to create user-friendly and interactive interfaces.</li>
          </ul>
          <p>
          My passion lies in building e-commerce complex  or AI chatbots .  I'm constantly learning and exploring new technologies to stay ahead of the curve..
          </p>
          <p>Feel free to browse my portfolio to see my work in action!</p>
           <Link to="/about" className="btn-about">About Me</Link>
           </div>
           </section>
    );
}

export default Home;
