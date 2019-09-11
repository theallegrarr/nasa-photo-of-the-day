import React from "react";
import Header from './header.jsx';
import ImageCard from './apiHandler.js';
import "./App.css";

function App() {
  const date = document.querySelector('input');
  console.log(date);

  return (
    <div className="App">
    <Header />
      <p>
        A fun way to see all the cool shots from NASA
      </p>
      
      <ImageCard />
      
    </div>
  );
}

export default App;
