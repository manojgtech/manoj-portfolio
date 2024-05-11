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

const Projects = () => {
    return (
        <section id="projects" class="projects" style={{color:'black',minHeight:'550px'}}>
		<div class="container aos-init aos-animate" data-aos="fade-up">
			<div class="section-title">
            <div className='col-md-12'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer"  href="https://www.zyratalk.com">
                    <img src={zyra} alt="Zyratalk" />
                    </a>
                    <div class="desc">Zyratalk</div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank"  rel="noreferrer" href="https://refcheckxperts.com/">
                    <img src={refcheck} alt="Refcheck Expert" />
                    </a>
                    <div class="desc">Refcheck Expert</div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer" href="https://hospitalcash.zoominsurancebrokers.com/">
                    <img src={zoom} alt="zoom" />
                    </a>
                    <div class="desc">Zoom</div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer" href="https://www.mediaferry.com/">
                    <img src={mediaferry} alt="Mediaferry Studio" />
                    </a>
                    <div class="desc">Mediaferry Studio</div>
                </div>
                </div>

                <div class="responsive">
                <div class="gallery">
                    <a target="_blank"  rel="noreferrer" href="https://grabidchauffeur.com/">
                    <img src={grabidc} alt="Grabid chauffeur" />
                    </a>
                    <div class="desc">Grabid Chauffeur</div>
                </div>
                </div>

                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer" href="https://grabidlogistics.com/">
                    <img src={grabidl} alt="Grabid Logistics" />
                    </a>
                    <div class="desc">Grabid Logistics</div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer" href="https://compass-tool.net/">
                    <img src={collective} alt="collective Leadership Instiute" />
                    </a>
                    <div class="desc">collective Leadership Instiute</div>
                </div>
                </div>
                <div class="responsive">
                <div class="gallery">
                    <a target="_blank" rel="noreferrer" href="https://mirrahealthcare.com/">
                    <img src={mirra} alt="Mirra Healthcare" />
                    </a>
                    <div class="desc">Mirra Healthcare</div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
        </section>
    );
}

export default Projects;
