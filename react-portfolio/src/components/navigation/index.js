/**************************************************************
 * 
 *  Renders a navigation bar with all links: 
 *  About, Portfolio, Contact 
 * 
 **************************************************************/

 import React from 'react';
 import './css/index.css';

 class NavigationBar extends React.Component{

    render() {

        return (

            <div className="navigation-bar">
                <ul>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>

        );

    }

 }