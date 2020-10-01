import React from 'react';
import './DevTools.css';
import Typical from 'react-typical';
import {DEVTOOLS} from '../../../data/devtools.js';

const devtools = props => {
    return (
        <div className="section" id="devtools-section">
            <div className="title">
                <h1 className="center glow">--- DevTools ---</h1>
            </div>
            <div className="container" id="devtools">
                {DEVTOOLS.map(devtool => (
                    <div className="devtools-section">
                        <h3>{devtool.heading}</h3>
                        <hr/>
                        <ul className="list-unstyled">
                            {devtool.subheadings.map(content => (
                                <li className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1 yellow">{content.subheading}</h5>
                                            <Typical wrapper='b' steps={[
                                                content.description
                                            ]}/>
                                        <br/>
                                        <a href={content.reference} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-primary">{content.button}</button></a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default devtools;