import React, { Component } from 'react';

import Container from '../../components/Container';
import AboutBackground from '../../components/AboutBackground';
import TitleCard from '../../components/TitleCard';

import './styles.css';

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <AboutBackground />
        <TitleCard />
      </Container>
    );
  }
}

export default AboutPage;
