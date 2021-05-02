import React from 'react';
import firbase from '../../../images/firebase.png';
import javaScript from '../../../images/javaScript.png';
import css from '../../../images/ccsss.png';
import react from '../../../images/reactjs.png';
import reactR from '../../../images/React.png';
import BlogsDetail from '../BlogsDetail/BlogsDetail';
const blogData = [
    {
        name:'A introduction JavaScript',
        desc:'A reintroduction JavaScript is a single thread, prototype based programming language that support multiple programming paradigm like Object Oriented programming, functional programming and procedural',
        image:javaScript
    },
    {
        name:'How to use firebase Authentication',
        desc:'firebase a cloud service by Google .. which have some features like Realtime database, Hosting, Auth, cloud functions etc . Which widely used by mobile and web application developers',
        image:firbase
    },
    {
        name:'Simple Introduction to React.js',
        desc:'React is a library that used to create awesome user interface … hence it is a library it need some other tools to make a complete web application',
        image:react
    },
    {
        name:'Getting started with React Router',
        desc:'What is React Router : React Router is The Powerful tool to create Single Page Web Application (SPA) . Basically it’s deauty is to manage your file path URL ',
        image:reactR
    },
    {
        name:'Top 10 CSS interview Questions',
        desc:'property means that even though the tag is not visible, it is still taking space on the web page. The tag is rendered, but invisible on the page.',
        image:css
    },
] 
const Blogs = () => {
    return (
        <div className='container'>
        <h1 className='text-white mb-5'> <span style={{color:'rgb(111, 210, 223)'}}>Some of</span> my blogs</h1>
            <div className='row'>
                
                {
                    blogData.slice(0,3).map(blog => <BlogsDetail blog = {blog} key={blog.desc} />)
                }
            </div>
        </div>
    );
};

export default Blogs;