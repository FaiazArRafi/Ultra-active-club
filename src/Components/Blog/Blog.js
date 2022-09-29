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
                    <p>1.	Props are read-only but State changes can be asynchronous. <br />
                        2.	Props are immutable but State is mutable. <br />
                        3.	Props allow you to pass data from one component to other components as an argument.	State holds information about the components. <br />
                        4.	Props can be accessed by the child component but State cannot be accessed by it. <br />
                        5.	Props are used to communicate between components on the other hand States can be used for rendering dynamic changes with the component. <br />
                        6.	Props make components reusable which State cannot. <br />
                        7.	Props are external and controlled by whatever renders the component  whether The State is internal and controlled by the React Component itself.</p>
                </div>
                <div>
                    <h3>What are uses of useEffect except loading data from API ?</h3>
                    <p>Validating an input while it's receiving characters is a great application for useEffect. useEffect can filter an array "on the fly" by typing letters into an input element. It can be used to trigger animation on new array value. useEffect can be used to using unpredictable timing functions like setTimeout or setInterval</p>
                </div>
            </article>
        </div>
    );
};

export default Blog;