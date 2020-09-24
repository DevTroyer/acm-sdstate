import React from 'react';
import './Officers.css';
import {SEMESTERS} from '../../../data/officers.js';

const officers = props => {
    return (
        <div className="section">
            <div className="title">
                <h1 className="center glow">--- Officers ---</h1>
            </div>
            <div className="container" id="officers">
                <div>
                    {SEMESTERS.map(semester => (
                        <div>
                            <div className="semester">{semester.term}</div>
                            <hr/>
                            <div className="officers row">
                                {semester.officers.map(officer => (
                                    <div className="card col-6 col-sm-6 col-md-6 col-lg-3">
                                        <img className="card-img-top" src={officer.photo} alt={officer.alt}/>
                                        <div className="card-body center">
                                            <h5 className="card-title">{officer.name}</h5>
                                            <p className="card-text">{officer.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default officers;