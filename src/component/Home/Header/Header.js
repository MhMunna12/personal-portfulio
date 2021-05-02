import React from 'react';
import image from '../../../images/munna.png';
import './Header.css';
import Typical from 'react-typical';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const Header = () => {
    return (
        <div className='container'>
            <ParticleBackground/>
            <div className=' row mt-5'>
                <div className='col-md-6'>
                    <div className='mt-5'>
                        <h3 style={{color:'#5ea0a0'}}>Hello, I'm</h3>
                        <h1 className='text-white mb-4'>Monwar Hossain</h1>
                        <h5 className='text-white'>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'I am Front-end developer . . .',3000,
                                    'MERN Stack developer ',2000
                                ]}
                            />
                        </h5>
                        <p className='text-white mb-4'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/monwar-hossain-7a514a20b/"><button  className='intro-btn'>Hire Me</button></a>
                        <a href="https://drive.google.com/uc?export=download&id=1Vu4dGyVg5C2qKXLQav7w2EH0xhnFg3Xg"><button style={{marginLeft:'20px'}} className='intro-btn'>Resume</button></a>
                    </div>
                </div>
                <div className='col-md-3'>
                    <img  style={{ height:'400px',marginLeft:'120px'}} src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;