import React from 'react';
import './DevTools.css';
import Typical from 'react-typical';

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
                                    <Typical wrapper='b' steps={[
                                        'Visual Studio is the most popular IDE (Integrated Development Environment) in the world, and is developed and maintained by Microsoft. It is used to develop and compile computer programs, as well as websites, web apps, web services, and mobile apps. It includes a code editor supporting IntelliSense (a component that uses analysis to complete code for you as you type) as well as code refactoring. Other built-in tools include a code profiler, a designer for building GUI applications, a web designer, a class designer, and a database schema designer. It accepts plug-ins that enhance its functionality at almost every level— including adding support for source control systems (like Git). The most basic edition of Visual Studio, the Community edition, is available free of charge.'
                                    ]}/>
                                <br/>
                                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank"><button type="button" className="btn btn-outline-primary">Download Visual Studio</button></a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Learn Debugging in Visual Studio</h5>
                                <Typical wrapper='b' steps={[
                                    'The Visual Studio debugger is a powerful tool. Debugging, in this context, means finding and removing bugs from your code. Debugging is one of the greatest skills you can learn that will help you to write programs faster and easier. Learn to debug to find out what is wrong with your program!'
                                ]}/>
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
                                <Typical wrapper='b' steps={[
                                    'Visual Studio Code is a free and open-source source-code text editor developed by Microsoft for Windows, Linux, and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion (using IntelliSense), snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. Visual Studio Code is the most popular developer environment tool in the world.'
                                ]}/>
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
                                <Typical wrapper='b' steps={[
                                    'Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is easy to learn and has a tiny footprint with lightning fast performance. It is one of the most popular version control systems in existence.'
                                ]}/>
                                <br/>
                                <a href="https://gitforwindows.org/" target="_blank"><button type="button" className="btn btn-outline-primary">Download Git</button></a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1 yellow">>> Learn Git</h5>
                                <Typical wrapper='b' steps={[
                                    'This is a resource that will help teach you Git in 30 minutes. If you code, Git is one of the most valuable skills you can learn during your time at university. It will provide you the ability to save multiple copies of your source code to the cloud in a remote repository that can be accessed and modified from anywhere with an internet connection.'
                                ]}/>
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
                                <Typical wrapper='b' steps={[
                                    "GitHub is the world's leading software development platform and brings together the world's largest community of developers to discover, share, and build better software. GitHub serves as an online library that allows you to not only preserve safe copies of your source code, but also to view millions of repositories coded by developers from around the world. It is free and home to 40 million developers worldwide."
                                ]}/>
                                <br/>
                                <a href="https://github.com/join" target="_blank"><button type="button" className="btn btn-outline-primary">Create GitHub Account</button></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default devtools;