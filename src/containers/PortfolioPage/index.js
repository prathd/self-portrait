import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';

class PortfolioPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/portfolio-page.css" rel="stylesheet"></link>
        </Helmet>

        <BrokenTitle>Work</BrokenTitle>
      </Container>
    );
  }
}

export default PortfolioPage;
