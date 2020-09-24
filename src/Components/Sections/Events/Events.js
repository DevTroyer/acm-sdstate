import React from 'react';
import './Events.css';
import {EVENTS} from '../../../data/events.js';

const events = props => {
    return (
        <div className="section" id="events-section">
            <div className="title">
                <h1 className="center glow">--- Events ---</h1>
            </div>
            <div className="container" id="events">
                <div className="events">
                    {EVENTS.map(event => (
                        <div className="card">
                            <img className="card-img-top" src={event.image} alt="Flexbox"/>
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
                                <p className="card-text">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default events;