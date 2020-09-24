import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import Banner from './components/Banner/Banner.js';
import Events from './components/Sections/Events/Events.js';
import Officers from './components/Sections/Officers/Officers.js';
import DevTools from './components/Sections/DevTools/DevTools.js';
import Tutoring from './components/Sections/Tutoring/Tutoring.js';
import Footer from './components/Footer/Footer.js';

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
