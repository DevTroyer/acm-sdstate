import React from 'react';
import './Tutoring.css';
import class1 from '../../../assets/images/class1.jpg';
import class2 from '../../../assets/images/class2.jpg';
import sydney from '../../../assets/images/sydney.jpg';
import Typical from 'react-typical';

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
                <ul>
                    <li className="media">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1 yellow">>> Offerings</h5>
                                <Typical wrapper='b' steps={[
                                    "Tutoring will be offered every Monday from 5:00pm - 6:00pm and every Thursday from 5:00pm - 6:00pm."
                                ]}/>
                        </div>
                    </li>
                    <li className="media">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1 yellow">>> Platform</h5>
                                <Typical wrapper='b' steps={[
                                    "Tutoring will take place on Microsoft Teams. All tutoring will specifically happen in the Tutoring channel of the ACM Microsoft Teams group."
                                ]}/>
                            <br/>
                            <a href="https://teams.microsoft.com/l/team/19%3ae584419e984c4f778ad68d7c212f1ae7%40thread.tacv2/conversations?groupId=c8f92f19-e84d-45cd-ad66-ab16e14f9434&tenantId=1bbefbe9-cb9e-4a62-bd10-a2a60b1a28c5" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-primary">Join Microsoft Teams Group</button></a>
                        </div>
                    </li>
                </ul>
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