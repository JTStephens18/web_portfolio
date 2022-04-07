import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Github from "../github-svgrepo-com.svg";
import LinkedIn from "../linkedin-big-logo-svgrepo-com.svg";
import Instagram from "../instagram-logo-svgrepo-com.svg";

class Sidenav extends Component {
    render() {
        return (
            <section className="sidenav-section">
                <Fade top delay={1000}>
                <div orientation="left" className="sidenav">
                    <ul>
                        <Fade top delay={1300}>
                        <li>
                            <a href="https://www.linkedin.com/in/justin-stephens-930a6021b/">
                                <img alt="LinkedIn" src={LinkedIn} width="20" height="20" className="LinkedIn-Logo">
                                </img>
                            </a>
                        </li>
                        </Fade>
                        <Fade top delay={1200}>
                        <li>
                            <a href="https://github.com/jTStephens18">
                                <img alt="github" src={Github} width="20" height="20" className='github-logo'>
                                </img>
                            </a>
                        </li>
                        </Fade>
                        <Fade top delay={1100}>
                        <li>
                            <a href="https://www.instagram.com/justintstephens/">
                                <img alt="Instagram" src={Instagram} width="20" height="20" className="Instagram-Logo">
                                </img>
                            </a>
                        </li>
                        </Fade>
                    </ul>
                </div>
                </Fade>
                <Fade top delay={1000}>
                <div orientation="right" className='sidenav-right'>
                    <a href="mailto:JTStephens18@gmail.com">
                        JTStephens18@gmail.com
                    </a>
                </div>
                </Fade>
            </section>
        );
    }
}

export default Sidenav