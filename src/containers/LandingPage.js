import React, { Component } from 'react';

import Container from '../components/Container';
import PersonalBlurb from '../components/PersonalBlurb';
import MiddleVerticalBackground from '../components/MiddleVerticalBackground';
import Hamburger from '../components/Hamburger';
import Drawer from '../components/Drawer';

import './landing-page.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }

  toggleDrawer() {
    this.setState({ showDrawer: !this.state.showDrawer });
  }

  render() {
    return (
      <Container>
        <PersonalBlurb />
        <MiddleVerticalBackground />

        <Hamburger
          showDrawer={this.state.showDrawer}
          toggleDrawer={() => this.toggleDrawer()}
        />
        <Drawer showDrawer={this.state.showDrawer} />
      </Container>
    );
  }
}

export default LandingPage;
