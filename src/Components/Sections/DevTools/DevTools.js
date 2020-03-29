import React from 'react';
import './DevTools.css';

const devtools = props => {
    return (
        <div className="section" id="devtools-section">
            <div className="title">
                <h1 className="center">--- DevTools ---</h1>
            </div>
            <div className="container" id="devtools">
                <div className="devtools-section">
                    <h3>Visual Studio</h3>
                    <hr/>
                    <ul className="list-unstyled">
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Download Visual Studio</h5>
                                Visual Studio is the most popular Integrated Development Environment in the world. Use it to develop and compile computer programs,
                                as well as websites, web apps, web services and mobile apps.
                                <br/>
                                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank"><button type="button" className="btn btn-outline-primary">Download Visual Studio</button></a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Learn Debugging in Visual Studio</h5>
                                Debugging is the single greatest skill to know to write programs faster and easier. Learn to debug to find out what is wrong with your program!
                                <br/>
                                <a href="https://docs.microsoft.com/en-us/visualstudio/debugger/?view=vs-2019" target="_blank"><button type="button" className="btn btn-outline-primary">Learn to Debug</button></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="devtools-section">
                    <h3>Visual Studio Code</h3>
                    <hr/>
                    <ul className="list-unstyled">
                        <li className="media my-4">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Download Visual Studio Code</h5>
                                Visual Studio Code is the most popular text editor in the world.
                                <br/>
                                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank"><button type="button" className="btn btn-outline-primary">Download Visual Studio Code</button></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="devtools-section">
                    <h3>Git</h3>
                    <hr/>
                    <ul className="list-unstyled">
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Download Git</h5>
                                Git is the most popular version control system.
                                <br/>
                                <a href="https://gitforwindows.org/" target="_blank"><button type="button" className="btn btn-outline-primary">Download Git</button></a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Learn Git</h5>
                                Learning Git will allow you to save your program to the cloud.
                                <br/>
                                <a href="https://tutorialzine.com/2016/06/learn-git-in-30-minutes" target="_blank"><button type="button" className="btn btn-outline-primary">Learn Git</button></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="devtools-section">
                    <h3>GitHub</h3>
                    <hr/>
                    <ul className="list-unstyled">
                        <li className="media my-4">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Create a GitHub Account</h5>
                                GitHub will be your own personal online library of code.
                                <br/>
                                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank"><button type="button" className="btn btn-outline-primary">Create GitHub Account</button></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default devtools;