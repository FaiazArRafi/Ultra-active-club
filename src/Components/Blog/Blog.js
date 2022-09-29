import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1>Have a Read</h1>
            <article className='blog-design'>

                <div>
                    <h3>How does React work ?</h3>
                    <p>React uses a declarative paradigm that makes it easier to reason about the  application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when the data changes. The declarative view makes the code more predictable and easier to debug.</p>
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