import React, { Component } from 'react';

import Container from '../components/Container';
import PersonalBlurb from '../components/PersonalBlurb';
import MiddleVerticalBackground from '../components/MiddleVerticalBackground';

import './landing-page.css';

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <PersonalBlurb />
        <MiddleVerticalBackground />
      </Container>
    );
  }
}

export default LandingPage;
