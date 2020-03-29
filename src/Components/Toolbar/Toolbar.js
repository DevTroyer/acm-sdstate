import React from 'react';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-toggle-button">
                <SideDrawerToggleButton click={props.sideDrawerClickHandler}/>
            </div>
            <div className="toolbar-logo">
                <a href="/">
                    <span className="white">ACM</span>
                    <span className="yellow">@</span>
                    <span className="white">SDState</span>
                    <span className="blinking-cursor">|</span>
                </a>
            </div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="#events" className="white">Events</a></li>
                    <li><a href="#officers" className="white">Officers</a></li>
                    <li><a href="#devtools" className="white">DevTools</a></li>
                    <li><a href="#tutoring" className="white">Tutoring</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;