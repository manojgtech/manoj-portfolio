import React from 'react';

const About = () => {
    return (
        <div className='section'>
           <h1>My Technical Skills</h1>
           <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
          <div className='row'>
            <div className='col-md-3'>
                <h5>Web Development</h5>
                <p>Javascript,  Python, PHP,  Node.js, MongoDB, MySql</p>
            </div>
            <div className='col-md-3'>
                <h5>Fronend</h5>
                <p>HTML, CSS,Bootstrap,Javascript,React JS</p>
            </div>
            <div className='col-md-3'>
                <h5>Consulting & SEO Audit</h5>
                <p>SEO,SMO,AUDITIG</p>
            </div>
          </div>
        </div>
    );
}

export default About;
