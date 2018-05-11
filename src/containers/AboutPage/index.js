import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import AboutBackground from '../../components/AboutBackground';
import TitleCard from '../../components/TitleCard';
import ContentCard from '../../components/ContentCard';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <AboutBackground />
        <Container>
          <Helmet>
            <link href="css/about-page.css" rel="stylesheet"></link>
          </Helmet>

          <TitleCard />
          <ContentCard />
        </Container>
      </div>
    );
  }
}

export default AboutPage;
