import React from 'react';
import myimg from '../img/me.jpg';

const Contact = () => {
    return (
        <section id="contact" class="projects" style={{color:'black',minHeight:'500px'}}>
		<div class="container aos-init aos-animate" data-aos="fade-up">
			<div class="section-title">
            <div className='column left'>
           <h3>Er. Manoj Kumar Gupta</h3>
           <div>
            <img src={myimg} className='img-circle' />
           </div>
        </div>
                <div className='column right'>
                    <h3>Contact Details:</h3>
           <ul>
            <li>mkmkgupta42@gmail.com</li>
            <li>8679988472</li>
            <li>Sector 22, Noida</li>
           </ul>
                </div>
                </div>
                </div>
                </section>
    );
}

export default Contact;
