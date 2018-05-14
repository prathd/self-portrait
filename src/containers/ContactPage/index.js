import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';
import Construction from '../../components/Construction';

class ContactPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/contact-page.css" rel="stylesheet"></link>
        </Helmet>

        <BrokenTitle>Contact</BrokenTitle>
        <Construction />
      </Container>
    );
  }
}

export default ContactPage;
