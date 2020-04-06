import React from 'react';
import styled from 'styled-components';

// background: #84596B;
// #3a2e39 (onyx), #1e555c (dark slate gray (bluish)), #f4d8cd(champange pink), #edb183(middle yellow red), #f15152 (red-orange)
const Meh = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
height: 100vh;
background: #f4d8cd;
color: 	black;
`
const About = () =>{

    return (
        <Meh>
        <div>
            
            <h2>Emily Gauthier</h2>
            <h5>Full Stack Web Developer</h5>
            <a href="https://www.linkedin.com/in/emily-gauthier-7013/" className="button" style={{ color: '#3a2e39' }}>Click here to visit my LinkedIn!</a>
            <p>I have several years of customer service under my belt, I am punctual, I have the ability to work under pressure, I am self-motivated, I enjoy learning new things, I can work through resolving conflicts within the company I have experience with HTML, CSS, JavaScript, React, Node.js</p>
        </div>
        </Meh>
    )
}
export default About;