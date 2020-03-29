import React from 'react';
import './Banner.css';
import Typical from 'react-typical';

const banner = props => {
    return (
        <div className="banner">
            <div className="center">
                <h1 className="shadow banner-quote">
                    <Typical wrapper='b' steps={[
                        '"Sometimes it is the people no one can imagine anything of who do the things no one can imagine."'
                    ]}/>
                </h1>
                <h2 className="shadow banner-signature">- Alan Turing</h2>
            </div>
            <a href="#events-section" className="scroll">View Club</a>
        </div>
    );
}

export default banner;