import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';
import PortfolioBlock from '../../components/PortfolioBlock';

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: 'HUBDOC',
          role: 'Web Development',
          image: 'images/browser-hubdoc.png',
          backgroundColor: '#86A4B2',
          foregroundColor: '#ABCDDC',
        }, {
          title: 'KINDRED TALENT',
          role: 'UI/UX Design & Product Manager',
          image: 'images/browser-kindred.png',
          backgroundColor: '#9A5B5E',
          foregroundColor: '#D4888B',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/portfolio-page.css" rel="stylesheet"></link>
        </Helmet>

        <BrokenTitle>Work</BrokenTitle>
        <PortfolioBlock data={this.state.data} />
      </Container>
    );
  }
}

export default PortfolioPage;
