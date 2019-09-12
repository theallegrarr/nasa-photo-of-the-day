import React from 'react';
import styled from 'styled-components';


/////////// HEAD STYLE
const StyledHead = styled.form`
    background-color: #282c34;
    min-height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    box-shadow: 0.5px 5px 5px #282c34;
    color: #61dafb;
`

function Header() {
    return (
      <>
        <StyledHead>
            <h3>🚀 NASA Photo of The Day 🚀</h3>
        </StyledHead>
      </>
    )
  }
  
  export default Header;