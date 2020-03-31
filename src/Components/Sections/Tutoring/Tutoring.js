import React from 'react';
import './Tutoring.css';
import schedule from '../../../assets/images/schedule.png';

const tutoring = props => {
    return (
        <div className="section">
            <div className="title">
                <h1 className="center glow">--- Tutoring ---</h1>
            </div>
            <div className="container" id="tutoring">
                <img src={schedule} alt="Tutoring schedule"/>
            </div>
        </div>
    );
}

export default tutoring;