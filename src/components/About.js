import React from 'react';
import myimg from '../img/me.jpg';

const About = () => {
return(
	<section id="about" class="about">
		<div class="container aos-init aos-animate" data-aos="fade-up">
			<div class="section-title">
				<h2>About</h2>
				<p>I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
			</div><div class="row">
				<div class="col-lg-4">
					<img src={myimg} class="img-fluid" alt="" /></div>
				<div class="col-lg-8 pt-4 pt-lg-0 content">
					<h3>Fullstack &amp; Sotfware Developer</h3>
					<p class="fst-italic"> I have worked on various type of enterprise applications in my 6 years of IT life.</p>
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
