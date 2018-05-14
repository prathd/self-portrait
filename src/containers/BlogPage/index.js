import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container';
import BrokenTitle from '../../components/BrokenTitle';
import Construction from '../../components/Construction';

class BlogPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <link href="css/blog-page.css" rel="stylesheet"></link>
        </Helmet>

        <BrokenTitle>Blog</BrokenTitle>
        <Construction />
      </Container>
    );
  }
}

export default BlogPage;
