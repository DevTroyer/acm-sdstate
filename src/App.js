import React, {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './Components/Toolbar/Toolbar.js';
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop/Backdrop.js';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  sideDrawerToggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar sideDrawerClickHandler={this.sideDrawerToggleButtonClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <p>Sample body text</p>
      </div>
    );
    }
  }

export default App;
