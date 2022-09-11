import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Wave from 'react-wavify';

class About extends Component {
    render() {
        return (
            <section id="About" className='about-section'>
                <div className='about-description'>
                    <Fade left delay={100}>
                    <h2 className='about-header'>
                        About Me
                    </h2>
                    </Fade>
                    <Fade left delay={100}>
                    <p className='about-paragraph'>
                        Hello! My name is Justin and I enjoy creating neat things. 
                        I'm currently interested in developing projects within the Web3 and Blockchain fields. 
                        Staying up-to-date with cutting edge technology and solving challenges excite me. 
                    </p>
                    </Fade>
                    <Fade left delay={100}>
                    <p className='about-paragraph'>
                        During these past three years in college I have committed myself to learning much about 
                        secure software engineering, machine learning, and all things decentralized. 
                    </p>
                    </Fade>
                    <Fade left delay={100}>
                    <p className='about-paragraph'>
                        When I'm not programming I spend my time missing shots in Rocket League, 
                        going to the gym so I can cosplay as my favorite anime character, and 
                        coming up with tasty recipes on a college budget. 
                    </p>
                    </Fade>
                </div>
                <div className='skills-list'>
                    <Fade right delay={100}>
                    <div className='chart'>
                        <span>Python</span>
                        <footer className='first-footer'>
                            <div></div>
                        </footer>
                    </div>
                    </Fade>
                    <Fade right delay={100}>
                    <div className='chart'>
                        <span>Solidity</span>
                        <footer className='second-footer'>
                            <div></div>
                        </footer>
                    </div>
                    </Fade>
                    <Fade right delay={100}>
                    <div className='chart'>
                        <span>C/C#</span>
                        <footer className='third-footer'>
                            <div></div>
                        </footer>
                    </div>
                    </Fade>
                    <Fade right delay={100}>
                    <div className='chart'>
                        <span>React.js</span>
                        <footer className='fourth-footer'>
                            <div></div>
                        </footer>
                    </div>
                    </Fade>
                    <Fade right delay={100}>
                    <div className='chart'>
                        <span>Ethers.js/Hardhat</span>
                        <footer className='fifth-footer'>
                            <div></div>
                        </footer>
                    </div>
                    </Fade>
                </div>
            </section>
        );
    }
}

export default About