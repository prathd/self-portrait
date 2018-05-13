import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import AboutBackground from '../../components/AboutBackground';
import TitleCard from '../../components/TitleCard';
import ContentCard from '../../components/ContentCard';
import TimelineCard from '../../components/TimelineCard';

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
          <TimelineCard />
        </Container>
      </div>
    );
  }
}

export default AboutPage;
