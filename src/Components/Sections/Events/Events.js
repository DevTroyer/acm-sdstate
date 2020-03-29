import React from 'react';
import './Events.css';

const events = props => {
    return (
        <div className="section" id="events-section">
            <div className="title">
                <h1 className="center">--- Events ---</h1>
            </div>
            <div className="container" id="events">
                <div className="events">
                    <div className="card">
                        <img className="card-img-top" src="https://miro.medium.com/max/1400/1*y7D5jICmjzvxZP6z-5EtDg.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Git Version Control System Presentation by Austin Hochhalter</h5>
                            <h6 className="card-subtitle mb-2 text-muted">March 4th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A presentation on Git version control system and GitHub.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://lloydcompanies.com/wp/wp-content/uploads/2018/06/officeCarsForSale4.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Carsforsale.com guest presentation by software architect, Harshith Keni</h5>
                            <h6 className="card-subtitle mb-2 text-muted">February 19th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A presentation about life as a developer at Carsforsale.com.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://holyokecodes.org/wp-content/uploads/2016/04/htmlcss.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Web Development Presentation Using HTML & CSS by Tucker Troyer</h5>
                            <h6 className="card-subtitle mb-2 text-muted">February 5th @ 5:30pm in DEH 118</h6>
                            <p className="card-text">A static website development walk-through tutorial using HTML & CSS.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://www.papajohns.com/free-pizza/img/hero-free-pizza.jpg" alt="Card image cap"/>
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