import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
            <div>
                <div className = 'p-5 '>
                <div className='text-center text-white'>
                    {/* <div className='d-flex justify-content-center'>
                        
                    </div> */}
                    <div className='band'>
                            <a href="https://github.com/MhMunna12" target='blank'><FontAwesomeIcon className="icon fa-3x text-white" icon={faGithub} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100004814732059" target='blank'><FontAwesomeIcon className="icon fa-3x text-white" icon={faFacebook} /></a>
                            <a href="https://www.linkedin.com/in/monwar-hossain-7a514a20b/" target='blank'><FontAwesomeIcon  className="icon fa-3x text-white" icon={faLinkedin} /></a>
                        </div>
                    <p>Copyright <span style={{color:'rgb(247, 144, 144)'}}>&copy;</span> {(new Date()).getFullYear()} | <a style={{color:'tomato'}} href="https://github.com/MhMunna12">Monwar Hoosain</a> </p>
                    <h5>Address: Ghior, Manikjong, Dhaka.</h5>
                </div>
            </div>
            </div>
    );
};

export default Footer;