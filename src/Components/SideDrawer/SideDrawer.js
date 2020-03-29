import React from 'react';
import './SideDrawer.css';
import acm from '../../assets/images/acm.jpg';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];

    if(props.show) {
        drawerClasses = ['side-drawer open'];
    }

    return (
        <nav className={drawerClasses}>
            <img className="acm-image" src={acm}/>
            <ul>
                <li><a href="#events">Events</a></li>
                <li><a href="#officers">Officers</a></li>
                <li><a href="#devtools">DevTools</a></li>
                <li><a href="#tutoring">Tutoring</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;