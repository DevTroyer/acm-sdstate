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
                <a href="/">ACM@SDState<span className="toolbar-logo-blinking-cursor">|</span></a>
            </div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Officers</a></li>
                    <li><a href="/">DevTools</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;