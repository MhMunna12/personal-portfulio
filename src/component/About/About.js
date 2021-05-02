import React from 'react';
import munna from '../../images/munna.jpg';
import Footer from '../Home/Footer/Footer';
import './About.css';
const About = () => {
    return (
        <div  className='container'>
            <div>
                <div className='col-md-6' style = {{margin:'0 auto'}}>
                    <div className='text-center about-container'>
                        <img src={munna} alt=""/>
                        <h1 style={{color:'rgb(158, 226, 211)'}}> <span style={{color:'rgb(224, 114, 166)'}}>Monwar</span> Hossain</h1>
                        <hr style={{width:'300px', border:'2px solid rgb(0, 255, 242)'}}/>
                        <p className='text-white'>
                            I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. 
                            I know Basic JAVA and MySQL but basically a MERN developer. 
                            I always focus on learning new technology. I am currently studying in the Department of Computer Science and Engineering, Dhaka International University.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-5 mt-5'>
                <div className='row'>
                    <div className='col-md-6'style={{borderRight:'3px solid yellow'}}>
                        <h1 className='text-center text-white'>My Skills</h1>
                        <hr className='hr-styled'/>

                        <h2 className='font-colr'>Expertise:</h2>
                        <div className='technologies'>
                            <li>JavaScript</li>   
                            <li>React.js</li>
                            <li>React Router</li>
                            <li>ES6</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React Bootstrap</li>
                        </div>

                        <h2 className='font-colr'>Familiar:</h2>
                        <div className='technologies'>
                            <li>Redux</li>   
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                        </div>

                        <h2 className='font-colr'>Tools:</h2>
                        <div className='technologies'>
                            <li>Visual Studio</li>   
                            <li>Firebase</li>
                            <li>Netlify</li>
                            <li>Chrome Dev Tools</li>
                            <li>Git</li>
                            <li>Heroku</li>
                        </div>
                    </div>

                    <div className='col-md-5' style={{marginLeft:'50px'}}>
                        <h1 className='text-center text-white'>My Education</h1>
                        <hr style={{width:'260px', border:'2px solid rgb(0, 255, 242)'}} />
                        <h2 className='font-colr'>Under Graduation</h2>
                        <h6 className='text-white'>B.Sc Eng. in Computer Science & Engineering</h6>
                        <h6 className='text-white'>Dhaka International University</h6>
                        <p className='text-white'>11th Semester(2021 CURRENT)</p>
                        

                        <h2 className='font-colr'>Diploma Engineering</h2>
                        <h6 className='text-white'>Diploma in Computer Technology</h6>
                        <h6 className='text-white'>Cumilla polytechnic Institute</h6>
                        <p className='text-white'>Session 2013 to 2017</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;