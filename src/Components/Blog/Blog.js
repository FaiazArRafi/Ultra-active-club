import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <article className='blog-design'>
                <div>
                    <h3>How does React work ?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>What is the difference between Props and State ?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>What are uses of useEffect except loading data from API ?</h3>
                    <p></p>
                </div>
            </article>
        </div>
    );
};

export default Blog;