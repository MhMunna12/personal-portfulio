import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css';

<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Original+Surfer&display=swap" rel="stylesheet"></link>

const Menubar = () => {
    return (
        <div className='menu-container'>
             <Navbar className="d-flex justify-content-between container  " variant="dark" expand="lg">
                <Navbar.Brand style={{color:'#79B530'}} as={Link} to="/"><h1>Monwar</h1></Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  class="navbar navbar-expand-lg navbar-light">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <Link to="/home" class="nav-link ms-5 active text-danger" aria-current="page">Home</Link>
                                <Link to = "/about" class="nav-link ms-5 text-primary">About</Link>
                                <Link to = "/project" class="nav-link ms-5 text-primary">Projects</Link>
                                <Link to = "/blog" class="nav-link ms-5 text-primary">Blog</Link>
                                <Link to = "/contact" class="nav-link ms-5 text-primary">Contact</Link>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Menubar;