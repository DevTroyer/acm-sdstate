import React from 'react';
import './Officers.css';
import austin from '../../../assets/images/austin.jpg';
import tucker from '../../../assets/images/tucker.png';
import caleb from '../../../assets/images/caleb.jpg';
import james from '../../../assets/images/james.jpg';

const officers = props => {
    return (
        <div className="section">
            <div className="title">
                <h1 className="center glow">--- Officers ---</h1>
            </div>
            <div className="container" id="officers">
                <div className="officers row">
                    <div className="card col-xs-12 col-s-6 col-md-4 col-lg-3">
                        <img className="card-img-top" src={tucker} alt="Tucker Troyer"/>
                        <div className="card-body center">
                            <h5 className="card-title">Tucker Troyer</h5>
                            <p className="card-text">President</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-s-6 col-md-4 col-lg-3">
                        <img className="card-img-top" src={austin} alt="Austin Hochhalter"/>
                        <div className="card-body center">
                            <h5 className="card-title">Austin Hochhalter</h5>
                            <p className="card-text">Vice President</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-s-6 col-md-4 col-lg-3">
                        <img className="card-img-top" src={james} alt="James Marrs"/>
                        <div className="card-body center">
                            <h5 className="card-title">James Marrs</h5>
                            <p className="card-text">JEC Representative</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-s-6 col-md-4 col-lg-3">
                        <img className="card-img-top" src={caleb} alt="Caleb Impecoven"/>
                        <div className="card-body center">
                            <h5 className="card-title">Caleb Impecoven</h5>
                            <p className="card-text">Treasurer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default officers;