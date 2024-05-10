import React from 'react';
import myimg from '../img/me.jpg';
import '../App.css';
const About = () => {
return(
	<section id="about" class="about">
		<div class="container aos-init aos-animate" data-aos="fade-up">
			<div class="section-title">
				<h2>About</h2>
				<div>
				<p>Experienced Web Developer | PHP | MySQL | React | Laravel | Node JS |CodeIgniter</p>
<p>
Hello there! I'm Manoj Kumar, a results-driven web developer with 7 years of experience in the dynamic world of web development. My passion for coding and problem-solving has led me to specialize in a range of technologies, including PHP, MySQL, React, Laravel, and CodeIgniter.</p>

<p>With a keen eye for detail and a focus on delivering high-quality solutions, I take pride in crafting efficient and user-friendly websites. My expertise lies in building robust back-end systems, seamless front-end interfaces, and ensuring optimal performance across various platforms.</p>

<p>Over the years, I've had the privilege of working on diverse projects, honing my skills in creating scalable web applications, e-commerce platforms, and content management systems. My commitment to staying up-to-date with the latest industry trends and best practices allows me to provide innovative and cutting-edge solutions.</p>

<p>As a team player, I thrive in collaborative environments, valuing open communication and collective problem-solving. I enjoy working with cross-functional teams to transform ideas into reality and drive successful project outcomes.</p>
<p>
When I'm not immersed in coding, you can find me exploring new technologies, attending tech meetups, and sharing my knowledge through writing technical articles. I believe in giving back to the developer community that has continuously supported me on my journey.
</p><p>
Let's connect and explore how my skills can contribute to the success of your next web development project. Feel free to reach out, and let's create something amazing together!</p>
				</div>
			</div><div class="row">
				<div class="col-lg-4">
					<img src={myimg} class="img-fluid" alt="" /></div>
				<div class="col-lg-8 pt-4 pt-lg-0 content">
					<h3>Fullstack &amp; Sotfware Developer</h3>
					<p class="fst-italic"> I have worked on various type of enterprise applications in my 7 years of IT life.</p>
					<div class="row"><div class="col-lg-6"><ul>
								<li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 2 Feb
									1992</li><li><i class="bi bi-rounded-right"></i> <strong>Website:</strong>
										https://manojgtech.github.io/manoj-portfolio</li>
									<li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong>
									+91 8447311900</li><li><i class="bi bi-rounded-right"></i> <strong>City:</strong>
									City : Noida,India</li>
								</ul>
								</div><div class="col-lg-6"><ul>
									<li><i
										class="bi bi-rounded-right"></i> <strong>Age:</strong> 33</li><li><i
										class="bi bi-rounded-right"></i> <strong>Degree:</strong> B.Tech(CS)</li><li><i
										class="bi bi-rounded-right"></i> <strong>PhEmailone:</strong>
									mkmkgupta42@gmail.com</li>
									<li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong>
									Available</li>
								</ul>
							</div>
						</div>
						<p>Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.</p>
					</div>
				</div>
			</div>
		</section>
);
}

export default About;
