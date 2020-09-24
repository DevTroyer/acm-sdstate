import React from 'react';
import './Footer.css';
import { FaReact } from  'react-icons/fa';
import { FaBootstrap } from  'react-icons/fa';

const footer = props => {
    return (
        <footer>
            <div className="footer-content">
                <h6 className="footer-text">Designed and developed by Tucker Troyer using <FaReact className="icons" id="react"/> + <FaBootstrap className="icons" id="bootstrap"/></h6>
            </div>
        </footer>
    );
}

export default footer;