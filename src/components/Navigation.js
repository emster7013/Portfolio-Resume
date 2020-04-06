import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// #3a2e39, #1e555c, #f4d8cd, #edb183, #f15152
const Navi = styled.nav`
border: 1px solid lightgray;
padding: .5%;
display: flex;
justify-content: space-between;
color: white;
text-decoration: none;
background: #f15152;
`

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <Navi>
          <div>
            <Link to={'/'} style={{ color: '#FFF' }}>Home</Link>
          </div>
          <div>
            <Link to ={'/Resume'} style={{ color: '#FFF' }}>Resume</Link>
          </div>
          <div>
            <Link to ={'/Projects'} style={{ color: '#FFF' }}>Projects</Link>
          </div>
        </Navi>
      </div>
    </div>
  );
};

export default Navigation;