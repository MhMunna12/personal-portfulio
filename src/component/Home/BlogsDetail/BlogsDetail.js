import React from 'react';
import './BlogDetail.css';
import Slide from 'react-reveal/Slide';
const BlogsDetail = (props) => {
    console.log(props)
    const {name, desc, image} = props.blog;
    return (
        <div className = 'col-md-4 blog-container mb-3'>
            <div className='d-flex justify-content-center'>
                <Slide left>
                    <div className='blog-detail'>
                        <img src={image} alt=""/>
                        <div className='blogg'>
                            <h5>{name}</h5>
                            <p>{desc}</p>
                        </div>
                    </div>
                </Slide>   
            </div>
        </div>
    );
};

export default BlogsDetail;