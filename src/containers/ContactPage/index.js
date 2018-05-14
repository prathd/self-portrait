import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';

class ContactPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/contact-page.css" rel="stylesheet"></link>
        </Helmet>

        <BrokenTitle>Contact</BrokenTitle>
      </Container>
    );
  }
}

export default ContactPage;
