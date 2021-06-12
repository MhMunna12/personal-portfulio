import React from 'react';
import libary from '../../../images/laibary.PNG';
import laptop from '../../../images/laptop.PNG';
import car from '../../../images/car.PNG';
import panda from '../../../images/panda.PNG';
import Zoom from 'react-reveal/Zoom';

import './Project.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className='container mb-5'>
            <div className='mt-5'>
                <h2 className='project-h2 text-white'>Some of <span style={{color:'rgb(111, 210, 223)'}}>my project</span> </h2>
            </div>
            <Zoom>
            <div className='row mb-4'>
                <div className='col-md-6 project-image'>
                    <img className='img-fluid rounded' src={laptop} alt=""/>
                </div>
                <div className='col-md-6 d-flex align-self-center '>
                    <div  className='content-left p-4 text-white'>
                        <h2>Laptop Repair</h2>
                        <p>
                            This is a Laptop repair-based website with dashboard. Where people can click buy 
                            service to get this service. Admin can add any services, manage any services in home 
                            page and also can see all service order list and change order status and also make 
                            admin another 
                        </p>
                        <div className='technologies mb-2'>
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>node.js</li>
                            <li>MongoDB</li>
                            <li>Stripe</li>
                            <li>Firebase</li>
                            <li>Bootstrap</li>
                        </div>
                        <div className='social-media'>
                            <li className="list-inline-item"><a href="https://github.com/MhMunna12/laptop-repair-client"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://laptop-repair-ac31e.web.app/"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-6 project-image'>
                    <img className='img-fluid rounded' src={libary} alt=""/>
                </div>
                <div className='col-md-6  d-flex align-self-center '>
                    <div className='content-left p-4 text-white'>
                        <h2>Book Library</h2>
                        <p>
                            his is a Book-library e-commerce based website. Where people can click buy product 
                            to get this service. Admin can add product, manage any product in home page. 
                        </p>
                        <div className='technologies mb-2'>
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>node.js</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>Bootstrap</li>
                        </div>
                        <div className='social-media'>
                            <li className="list-inline-item"><a href="https://github.com/MhMunna12/Book-Libary"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://book-library-a7b6e.web.app"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className='col-md-6 project-image'>
                    <img className='img-fluid rounded' src={car} alt=""/>
                </div>
                <div className='col-md-6 mb-2 d-flex align-self-center '>
                    <div className='content-left p-4 text-white'>
                        <h2>City Service</h2>
                        <p>
                            This is a ride car-service website. There some ride option such as bike, car, bus and 
                            train this ride service users have to click ride option and give some destination 
                            information and then that ride option will be booked for user. 
                        </p>
                        <div className='technologies mb-2'>
                            <li>React.js</li>
                            <li>React Router</li>
                            <li>Bootstrap</li>
                        </div>
                        <div className='social-media'>
                            <li className="list-inline-item"><a href="https://github.com/MhMunna12/Car-service"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://city-car-auth.web.app"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 project-image'>
                    <img className='img-fluid rounded' src={panda} alt=""/>
                </div>
                <div className='col-md-6 mb-2 d-flex align-self-center '>
                    <div className='content-left p-4 text-white'>
                        <h2>Panda Commerce</h2>
                        <p>
                        A simple , static and one page Ecommerce website design . It is a XD to HTML conversion .
                        </p>
                        <div className='technologies mb-2'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Firebase</li>
                            <li>Bootstrap</li>
                        </div>
                        <div className='social-media'>
                            <li className="list-inline-item"><a href="https://github.com/MhMunna12/panda-bootstaro"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href="https://mhmunna12.github.io/panda-bootstaro/"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                        </div>
                        
                    </div>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default Projects;