import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="Contact" className='contact-section'>
                    <h2 className='contact-header'>
                        Get in touch
                    </h2>
                    <p className='contact-description'>
                        I'm currently looking for projects related to Web 3.0 and anything to do with blockchain!
                        Have questions or just want to chat? Feel free to reach out to me via email or LinkedIn. 
                    </p>
                    <a href="mailto:JTStephens18@gmail.com" className='btn'>
                        Say Hello
                    </a>
            </section>
        );
    }
}

export default Contact