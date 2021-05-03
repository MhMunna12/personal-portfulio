import React, { useEffect, useRef } from 'react';
import image from '../../../images/munna.png';
import './Header.css';
import Typical from 'react-typical';
import Flash from 'react-reveal/Flash';
import Zoom from 'react-reveal/Zoom';
import lottie from 'lottie-web';
import ParticleBackground from '../../ParticleBackground/ParticleBackground';

const Header = () => {
    const container = useRef(null);
    useEffect(()=> {
        lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../../lottie/munna.json')
        })
    },[])
    return (
        <div className='container'>
            <ParticleBackground/>
            <div className=' row mt-5'>
                <div className='col-md-5'>
                    <div className='mt-5'>
                        <Flash>
                            <h3 style={{color:'#5ea0a0'}}>Hello, I'm</h3>
                            <h1 className='text-white'>Monwar Hossain</h1>
                            </Flash>
                            <h4  className='text-white mb-4'>
                                I am
                                <span style={{color:'tomato'}}>
                                    <Typical
                                        
                                        loop={Infinity}
                                        wrapper='b'
                                        steps={[
                                            ' Front-end developer . . .',3000,
                                            ' MERN Stack developer ',2000
                                        ]}
                                    />
                                </span>
                            </h4>
                        
                        <p className='text-white mb-4'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities</p>
                    </div>
                    <div>
                        
                            <a href="https://www.linkedin.com/in/monwar-hossain-7a514a20b/"><button  className='intro-btn'>Hire Me</button></a>
                            <a href="https://drive.google.com/uc?export=download&id=1Vu4dGyVg5C2qKXLQav7w2EH0xhnFg3Xg"><button style={{marginLeft:'20px'}} className='intro-btn'>Resume</button></a>
                        
                    </div>
                    
                </div>
                <Zoom>
                    <div className='col-md-7 mt-5'>
                        <div className='container' ref={container} >

                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Header;