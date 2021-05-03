import React from 'react';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import emailjs from 'emailjs-com';
import Rotate from 'react-reveal/Rotate';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_y4t9mlm', 'template_iyzsjde', e.target, 'user_OhgfEALjAt1wj93XYzxyb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert('Thank You for message')
        } 
    return (
        <div className='container mt-5'>
            <div className='row'>
            <Rotate top left>
                <div className='col-md-6 mt-5'>
                    <div className='col-md-12' style = {{margin:'0 auto'}}>
                        <h1 style={{color:'tomato'}}> <span className='text-white'>Contact</span> Me</h1>
                            <p className='text-white mt-4'>
                                I’m interested in  opportunities – especially medium or large projects. However, if you have other request or question, don’t hesitate to use the form
                            </p>
                            <form onSubmit={sendEmail}>
                                <div className = 'form-group'>
                                    <input type="text" className = "form-control" name='email' placeholder = "Email Address*" />
                                </div>
                                <div className = 'form-group'>
                                    <input type="text" className = "form-control" name='name' placeholder = "Name*" />
                                </div>
                                <div className = 'form-group'>
                                    <textarea name = "" className = "form-control" name='message' cols = "20" rows = "5" placeholder = "Subject*"></textarea>
                                </div>
                                <div className = "form-group text-center">
                                    <input className='intro-btn' type = "submit"/> 
                                </div>
                            </form>
                        </div>
                    </div>
                </Rotate>
                <div className='col-md-6 mt-5'>
                    <Rotate top right>
                        <div >
                            <Map/>
                        </div>
                    </Rotate>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;