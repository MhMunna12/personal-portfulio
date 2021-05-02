import React from 'react';

const Footer = () => {
    return (
        <div className = 'p-5 '>
            <div className='text-center text-white'>
                <p>Copyright <span style={{color:'rgb(247, 144, 144)'}}>&copy;</span> {(new Date()).getFullYear()} | <a style={{color:'tomato'}} href="https://github.com/MhMunna12">Monwar Hoosain</a> </p>
                <h5>Address: Ghior, Manikjong, Dhaka.</h5>
            </div>
        </div>
    );
};

export default Footer;