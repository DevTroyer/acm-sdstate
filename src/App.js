import React, {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './Components/Toolbar/Toolbar.js';
import SideDrawer from './Components/SideDrawer/SideDrawer.js';
import Backdrop from './Components/Backdrop/Backdrop.js';
import Banner from './Components/Banner/Banner.js';
import Events from './Components/Sections/Events/Events.js';
import Officers from './Components/Sections/Officers/Officers.js';
import DevTools from './Components/Sections/DevTools/DevTools.js';
import Tutoring from './Components/Sections/Tutoring/Tutoring.js';
import Footer from './Components/Footer/Footer.js';
import Typical from 'react-typical';

import './assets/css/fonts.css';
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
      <div className="background-yellow" style={{height: '100%'}}>
        <Toolbar sideDrawerClickHandler={this.sideDrawerToggleButtonClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Banner/>
        <Events/>
        <Officers/>
        <DevTools/>
        <Tutoring/>
        <Footer/>
      </div>
    );
  }
}

export default App;
