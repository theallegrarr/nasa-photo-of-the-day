import React from 'react';
import apiData from './apiHandler';
import './App.css';

function ImageCard(){

    return (
        <>
            <div className="data-card">
                <img className='image' src={apiData.url}></img>
                <div className="text-content">
                    <h3>Title: {apiData.copyright}</h3>
                    <h4>Date: {apiData.date}</h4>
                    <p>{apiData.explanation}</p>
                </div>
            </div>
        </>
    );
}

export default ImageCard;