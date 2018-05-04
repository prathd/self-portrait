import React, { Component } from 'react';

import Container from '../components/Container';
import HomemadeAppleText from '../components/HomemadeAppleText';

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <HomemadeAppleText fontSize="100px">This is my initial container</HomemadeAppleText>
      </Container>
    );
  }
}

export default LandingPage;
