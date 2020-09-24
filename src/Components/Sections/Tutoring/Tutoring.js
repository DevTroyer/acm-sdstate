import React from 'react';
import './Tutoring.css';
import class1 from '../../../assets/images/class1.jpg';
import class2 from '../../../assets/images/class2.jpg';
import sched from '../../../assets/images/sched.PNG';
import sydney from '../../../assets/images/sydney.jpg';

const tutoring = props => {
    return (
        <div className="section">
            <div className="title">
                <h1 className="center glow">--- Tutoring ---</h1>
            </div>
            <div className="container" id="tutoring">
                <h3>Classes</h3>
                <hr/>
                <img className="tutoring-img" src={class2}/>
                <img className="tutoring-img" src={class1}/>
                <h3>Schedule</h3>
                <hr/>
                <img className="tutoring-img" src={sched}/>
                <h3>Tutors</h3>
                <hr/>
                <div className="container">
                    <div className="officers row">
                        <div className="card col-6 col-sm-6 col-md-6 col-lg-3">
                            <img className="card-img-top" src={sydney} alt="Sydney Berry"/>
                            <div className="card-body center">
                                <h5 className="card-title">Sydney Berry</h5>
                                <p className="card-text">sydney.berry@jacks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default tutoring;