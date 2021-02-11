/**************************************************************
 * 
 *  Renders an About Me section with a picture, a description
 *  and a download resume link
 * 
 **************************************************************/

 import React from 'react';
 import './css/index.css';

 class AboutMe extends React.Component {

    render(props) {

        return (

            <div className="about-section">
                <h1>{props.name}</h1>
                <img src={props.userImage} alt=""/>
                <button className="download-resume">Download Resume</button>
                <p>{props.bio}</p>
            </div>

        );

    }

 }