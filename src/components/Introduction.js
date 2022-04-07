import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import 'animate.css';
import ParticleBackground from './particle-background';

class Introduction extends Component {

    render() {
        return (
            <section id ="introduction" className="intro-section intro-particle">
                <ParticleBackground className="particle-background"/>
                <Fade bottom delay={500}>
                    <h1 className="animated-header">
                        <div id="repulse-me" className="intro-hey">
                            <span className="intro-rubberBand">H</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">y</span>
                            <span className="intro-rubberBand">!</span>
                        </div>
                        <div className="intro-my">
                            <span className="intro-rubberBand">M</span>
                            <span className="intro-rubberBand">y</span>
                        </div>
                        <div className="intro-name">
                            <span className="intro-rubberBand">n</span>
                            <span className="intro-rubberBand">a</span>
                            <span className="intro-rubberBand">m</span>
                            <span className="intro-rubberBand">e</span>
                        </div>
                        <div className="intro-is">
                            <span className="intro-rubberBand">i</span>
                            <span className="intro-rubberBand">s</span>
                        </div>
                    </h1>
                </Fade>
                <Fade bottom delay={600}>
                    <h2 className="animated-header2">
                        <div className="intro-justin">
                            <span className="intro-rubberBand">J</span>
                            <span className="intro-rubberBand">u</span>
                            <span className="intro-rubberBand">s</span>
                            <span className="intro-rubberBand">t</span>
                            <span className="intro-rubberBand">i</span>
                            <span className="intro-rubberBand">n</span>
                        </div>
                        <div className="intro-stephens">
                            <span className="intro-rubberBand">S</span>
                            <span className="intro-rubberBand">t</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">p</span>
                            <span className="intro-rubberBand">h</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">n</span>
                            <span className="intro-rubberBand">s</span>
                            <span className="intro-rubberBand">.</span>
                        </div>
                    </h2>
                </Fade>
                <Fade bottom delay={700}>
                    <h3 className="animated-header3">
                        <div className="intro-Im">
                            <span className="intro-rubberBand">I</span>
                            <span className="intro-rubberBand">'</span>
                            <span className="intro-rubberBand">m</span>
                        </div>
                        <div className="intro-A">
                            <span className="intro-rubberBand">a</span>
                        </div>
                        <div className='intro-Web3'>
                            <span className="intro-rubberBand">w</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">b</span>
                        </div>
                        <div className='intro-Developer'>
                            <span className="intro-rubberBand">d</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">v</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">l</span>
                            <span className="intro-rubberBand">o</span>
                            <span className="intro-rubberBand">p</span>
                            <span className="intro-rubberBand">e</span>
                            <span className="intro-rubberBand">r</span>
                        </div>
                    </h3>
                </Fade>
                <Fade bottom delay={800}>
                <div className='intro-description'>
                    <p>
                        Blockchain developer / Crypto enthusiast 
                    </p>
                </div>
                </Fade>
            </section>
        );
    }

}

export default Introduction