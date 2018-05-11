import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import PersonalBlurb from '../../components/PersonalBlurb';
import MiddleVerticalBackground from '../../components/MiddleVerticalBackground';

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/landing-page.css" rel="stylesheet"></link>
        </Helmet>
        <PersonalBlurb />
        <MiddleVerticalBackground />
      </Container>
    );
  }
}

export default LandingPage;
