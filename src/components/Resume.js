import React from 'react';
import styled from 'styled-components';

const Res = styled.div `
display: flex;
justify-content: center;
background: white;
list-style-type: none;
`

const Resume = () =>{



    return(
        <Res>

        <div>
            <h2>Resume</h2>
            <a href="https://www.linkedin.com/in/emily-gauthier-7013/" class="button">Click here to visit my LinkedIn!</a>
            <h4>Skills</h4>
            <p>HTML| CSS| JavaScript| React| Node.js</p>
            <h4>Experience</h4>
            <h5>Sbarro</h5>
            <p>Portage, MI  April 2015-August 2017</p>
            <p>Food prep, server, cashier, shift supervisor</p>
            
            <li>Prepared food before/during/after shift</li>
            <li>Handled cash drawers/ recorded all monetary values through computer and paperwork</li>
            <li>Handled/Served food under the right guidelines and proper techniques</li>
            <li>Supervised a team of 5-10 employees</li>
            
            <h5>Regis Corp</h5>
            <p>Kalamazoo, MI  August 2015-April 2019</p>
            <p>Cosmetologist</p>
                <li>Performed cleaning duties and proper sanitation of tools</li>
                <li>Cut, colored, styled, etc...</li>

                <h5>Tangles Salon</h5>
                <p>Homer, Ak March-2017-January 2019</p>
                <p>Cosmetologist</p>
                <li>Performed cleaning duties and proper sanitation of tools</li>
                <li>Cut, colored, styled, etc...</li>
                <li>Performed basic manicures/pedicures</li>

                <h5>Homer Theater</h5>
                <p>Homer, Ak May-2017-January 2019</p>
                <p>Shift Supervisor</p>
                <li>Food Prep</li>
                <li>Technical support with getting the movie screen working, POS system, recording monetary value in computer and through paperwork</li>
                <li>Cashier</li>
                <li>Custodial duties</li>

                <h4>Eductaion</h4>
                <h5>Parchment High School</h5>
                <p>Parchment, MI 2010-2014</p>
                <p>Recieved my Diploma</p>

                <h5>Empire Beauty School</h5>
                <p>Portage, MI 2014-2015</p>
                <p>Licensed in Cosmetology</p>
                <p>I have completed all 1,500 hours of required schooling</p>

                <h5>Lambda School</h5>
                <p>California (remote learning from home) Sep 2019-present</p>
                <p>Full Stack Web Development & Computer Science</p>
                <p>Lambda School is an 18+ month accelerated program with an immersive (part-time , 15+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.</p>
        </div>
        </Res>
    )
}
export default Resume;