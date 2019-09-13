import React from "react";
import Header from './header.jsx';
import ImageCard from './apiHandler.js';
import styled from 'styled-components';


const StyledMain = styled.div`
  text-align: center;
`

function App() {
  const date = document.querySelector('input');
  console.log(date);

  return (
    <StyledMain>
      <Header />
      <p>
        A fun way to see all the cool shots from NASA
      </p>
      <ImageCard />
    </StyledMain>
  );
}

export default App;
