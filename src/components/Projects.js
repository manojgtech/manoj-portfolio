import React from 'react';
import "../App.css"; 
import zyra from '../img/zyra.png';
import refcheck from '../img/refcheck.png';
import mediaferry from '../img/mediaferry.png';
import zoom from '../img/zoom.png';
import grabidc from '../img/grabidc.png';
import grabidl from '../img/grabidl.png';
import collective from '../img/collective-1.webp';
import mirra from '../img/mirra.png';
import vrify from '../img/vrify.png';
const Projects = () => {
    return (
        <section id="projects" class="projects" style={{color:'black',minHeight:'550px'}}>
		<div class="container aos-init aos-animate" data-aos="fade-up">
			<div class="section-title">
            <div className='col-md-12'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={zyra} alt="Zyratalk" />
                    </a>
                    <div class="desc"><a href='https://www.zyratalk.com' target='_blank'>Zyratalk</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={refcheck} alt="Refcheck Expert" />
                    </a>
                    <div class="desc"><a href='https://refcheckxperts.com/' target='_blank'>Refcheck Expert</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={zoom} alt="zoom" />
                    </a>
                    <div class="desc"><a href='https://hospitalcash.zoominsurancebrokers.com/' target='_blank'>Zoom</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={mediaferry} alt="Mediaferry Studio" />
                    </a>
                    <div class="desc"><a href='https://www.mediaferry.com/' target='_blank'>Mediaferry Studio</a></div>
                </div>
                </div>

                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={vrify} alt="Vrifynow Systems" />
                    </a>
                    <div class="desc"><a href="https://vrifysystems.com/" target='_blank'>Vrifynow Systems</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={grabidc} alt="Grabid chauffeur" />
                    </a>
                    <div class="desc"><a href="https://grabidchauffeur.com/" target='_blank'>Grabid Chauffeur</a></div>
                </div>
                </div>

                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={grabidl} alt="Grabid Logistics" />
                    </a>
                    <div class="desc"><a href='https://grabidlogistics.com/' target="_blank">Grabid Logistics</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={collective} alt="collective Leadership Instiute" />
                    </a>
                    <div class="desc"><a href='https://compass-tool.net/' target="_blank">collective Leadership Instiute</a></div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={mirra} alt="Mirra Healthcare" />
                    </a>
                    <div class="desc"><a href="https://mirrahealthcare.com/" target='_blank'>Mirra Healthcare</a></div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
        </section>
    );
}

export default Projects;
