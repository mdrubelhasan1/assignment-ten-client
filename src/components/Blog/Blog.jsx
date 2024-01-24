import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div>
                <h2>This is blog page</h2>
                <h4>1. Tell us the differences between uncontrolled and controlled components.
                </h4>
                <p>In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.</p>
                <h4>2. How to validate React props using PropTypes</h4>
                <p>Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

                    Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.</p>
                    <h4>3. Tell us the difference between nodejs and express js.</h4>
                    <p>Node JS is a platform for building i/o applications that are server-side event-driven and made using JavaScript. Express JS is a framework based on Node JS which is used for building web applications using approaches and principles of Node JS event-driven architecture.</p>
                    <h4>4. What is a custom hook, and why will you create a custom hook</h4>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which ensures clean code and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </Container>
    );
};

export default Blog;