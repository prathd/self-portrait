import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Helmet>
            <link href="css/contact-page.css" rel="stylesheet"></link>
          </Helmet>

          <BrokenTitle>Contact</BrokenTitle>
          <ContactInfo />
        </Container>
        <ContactForm />
      </div>
    );
  }
}

export default ContactPage;
