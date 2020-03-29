import React from 'react';
import './Events.css';
import git from '../../../assets/images/git.png';
import carsforsale from '../../../assets/images/carsforsale.jpg';
import htmlcss from '../../../assets/images/htmlcss.png';
import pizza from '../../../assets/images/pizza.webp';

const events = props => {
    return (
        <div className="section" id="events-section">
            <div className="title">
                <h1 className="center">--- Events ---</h1>
            </div>
            <div className="container" id="events">
                <div className="events">
                    <div className="card">
                        <img className="card-img-top" src={git} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Git Version Control System Presentation by Austin Hochhalter</h5>
                            <h6 className="card-subtitle mb-2 text-muted">March 4th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A presentation on Git version control system and GitHub.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={carsforsale} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Carsforsale.com Software Architect Guest Speaker, Harshith Keni</h5>
                            <h6 className="card-subtitle mb-2 text-muted">February 19th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A presentation about life as a developer at Carsforsale.com.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={htmlcss} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web Development Presentation Using HTML & CSS by Tucker Troyer</h5>
                            <h6 className="card-subtitle mb-2 text-muted">February 5th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A static website development walk-through tutorial using HTML & CSS.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={pizza} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">ACM Spring 2020 Kickoff Meeting</h5>
                            <h6 className="card-subtitle mb-2 text-muted">January 22nd @ 5:30pm in DEH 118</h6>
                            <p className="card-text">Kickoff meeting to start the semester!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default events;