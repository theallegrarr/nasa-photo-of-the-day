import React, { useState, useEffect } from 'react';
// step 1: bring axios!
import axios from 'axios';
import styled from 'styled-components';

const shotsApi = '';
const fdata = {
    copyright: "Bray Falls",
    date: "2019-09-11",
    explanation: "What energizes the Heart Nebula? First, the large emission nebula dubbed IC 1805 looks, in whole, like a human heart.  The nebula glows brightly in red light emitted by its most prominent element: hydrogen.  The red glow and the larger shape are all powered by a small group of stars near the nebula's center.  In the center of the Heart Nebula are young stars from the open star cluster Melotte 15 that are eroding away several picturesque dust pillars with their energetic light and winds. The open cluster of stars contains a few bright stars nearly 50 times the mass of our Sun, many dim stars only a fraction of the mass of our Sun, and an absent microquasar that was expelled millions of years ago.  The Heart Nebula is located about 7,500 light years away toward the constellation of Cassiopeia.  Coincidentally, a small meteor was captured in the foreground during imaging  and is visible above the dust pillars.  At the top right is the companion Fishhead Nebula.",
    hdurl: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_2378.jpg",
    media_type: "image",
    service_version: "v1",
    title: "IC 1805: The Heart Nebula",
    url: "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg"
}

/////////STYLED CARD
const StyledCard = styled.div`
        display: flex;
        flex-direction: row;
        width: 98%;
        padding: 1%;
        align-self: center;
        justify-content: space-evenly;
        align-items: center;
        background-color: #282c34;
        color: white;
        background-blend-mode: overlay;

    h4 {
        font-style: italic;
    }
    h3 {
        color: #61dafb;
    }

    img, .text-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-items: flex-start;
        width: 70%;
        text-align: left;
    }

    img {
        width: 25%;
    }

`

/////////// FORM STYLE
const StyledForm = styled.form`
    .date {
        display: flex;
        flex-direction: row;
        width: 10%;
        font-weight: 900;
    }

    input {
        border: 1px solid #61dafb;
        border-radius: 6px;
        text-align: center;
        font-weight: 900;
    }
`


function GetData(props) {
  
  const [shots, setShots] = useState({});

  const [date, setDate] = useState({ startDate: '2019-9-11' });
  const shotLink = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.startDate}`;


  useEffect(() => {
    const shotsPromise = axios.get(shotLink);
    
    Promise.all([shotsPromise])
      .then(data => {
          //debugger
          
        setShots({
            copyright: data[0].data.copyright,
            date: data[0].data.date,
            explanation: data[0].data.explanation,
            hdurl: data[0].data.hdurl,
            media_type: data[0].data.image,
            service_version: data[0].data.service_version,
            title: data[0].data.title,
            url: data[0].data.url, 
        })
        //if(!data)setShots(fdata);
      })
  }, [date, shots])

  

  return (
    <>
    <StyledForm>
        Date:   
        <input type="date" onChange={(event) => {
                setDate({startDate: event.target.value})}
            }>
        </input>
    </StyledForm>

    <StyledCard>
        <img className='image' src={shots.url}></img>
        <div className="text-content">
            <h1>Title: {shots.title}</h1>
            <h3>Copyright: {shots.copyright}</h3>
            <h4>Date: {shots.date}</h4>
            <p>{shots.explanation}</p>
        </div>
    </StyledCard>
    </>
  );
}




export default GetData;