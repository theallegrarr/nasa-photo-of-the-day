import React from "react";
import Header from './header.jsx';
import ImageCard from './imageCard.jsx';
import "./App.css";

function App() {
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
