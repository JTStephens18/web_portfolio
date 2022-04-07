import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Resume from "../Justin Stephens - SWE Resume (1).pdf";

class Header extends Component {
    render() {
        return (
            <div className='topbar'>
                <div className='styled-links'>
                    <ol>
                    <Fade top delay={100}>
                        <li>
                            <a href="/#About">
                                About
                            </a>
                        </li>
                        </Fade>
                        <Fade top delay={200}>
                        <li>
                            <a href="/#Experience">
                                Experience
                            </a>
                        </li>
                        </Fade>
                        <Fade top delay={300}>
                        <li>
                            <a href='/#Contact'>
                                Contact
                            </a>
                        </li>
                        </Fade>
                    </ol>
                    <Fade top delay={400}>
                        <a href={Resume} className='btn'>
                            Resume
                        </a>
                    </Fade>
                </div>
            </div>
        );
     }
}

export default Header