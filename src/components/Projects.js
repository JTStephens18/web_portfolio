import React, {Component} from 'react';
import Particles from 'react-tsparticles';
import ParticleBackground from './particle-background';

class Projects extends Component {
    constructor(props) {
        super(props);
        
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log(main);
    }

    particlesLoaded(container) {
        console.log(container);
    }

    render() {
         return (
            <section id="projects">
                <div className='particle-containers'>
                    {/* <ParticleBackground /> */}
                    <div className='particle-text'>
                        TEST
                    </div>
                </div>
                    {/* <div className='particle-containers'>
                        Test Above */}
                        {/* <ParticleBackground /> */}
                    {/* Test Below
                    </div>
                <div className='projects-particle'>
                    <div className='particle-text'>
                        TEST2
                    </div>
                </div> */}
            </section>
        );
    }
}

export default Projects