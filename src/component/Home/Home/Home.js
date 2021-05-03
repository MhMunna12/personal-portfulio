import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import './Home.css';
<link href="https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap" rel="stylesheet"></link>


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;