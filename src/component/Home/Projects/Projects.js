import React from 'react';
import kutumbari from '../../../images/kutumbari.JPG';
import vehicle from '../../../images/vehicle.JPG';
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
                <h2 className='project-h2 text-white'>Some of <span style={{ color: 'rgb(111, 210, 223)' }}>my project</span> </h2>
            </div>
            <Zoom>
                <div className='row mb-4'>
                    <div className='col-md-6 project-image'>
                        <img className='img-fluid rounded' src={kutumbari} alt="" />
                    </div>
                    <div className='col-md-6 d-flex align-self-center '>
                        <div className='content-left p-4 text-white'>
                            <h2>Kutumbari Restaurant</h2>
                            <p>
                                This is a Kutumbari Restaurant-based website with dashboard. Where people can click buy
                                the order to get this food service. Admin can add any foods items, manage any food items in home
                                page and also can see all food order list and change order status and also make
                                admin another.
                            </p>
                            <div className='technologies mb-2'>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>node.js</li>
                                <li>MongoDB</li>
                                <li>Stripe</li>
                                <li>Firebase</li>
                                <li>Tailwind CSS</li>
                            </div>
                            <div className='social-media'>
                                <li className="list-inline-item"><a href="https://github.com/MhMunna12/kutumbari-restaurants-client"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a href="https://kutumbari-restaurant.web.app//"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-md-6 project-image'>
                        <img className='img-fluid rounded' src={vehicle} alt="" />
                    </div>
                    <div className='col-md-6  d-flex align-self-center '>
                        <div className='content-left p-4 text-white'>
                            <h2>Vehicle Repair</h2>
                            <p>
                                This is a Vehicle repair service-center-based website with dashboard. Where people can click a
                                service to get this service. Admin can add any services, manage any services in home
                                page and also can see all service.
                            </p>
                            <div className='technologies mb-2'>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>node.js</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>Tailwind CSS</li>
                            </div>
                            <div className='social-media'>
                                <li className="list-inline-item"><a href="https://github.com/MhMunna12/vehicle-repair-client"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a href="https://project-fd9f0.web.app"><FontAwesomeIcon className="icon active-icon" icon={faGlobe} /></a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6 project-image'>
                        <img className='img-fluid rounded' src={panda} alt="" />
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