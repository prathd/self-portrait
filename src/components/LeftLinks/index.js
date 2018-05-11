import React, { Component } from 'react';

import * as Styled from './styled';

export default class LeftLinks extends Component {
  render() {
    return (
      <Styled.LinksDiv>
        <Styled.Link>TWITTER</Styled.Link>
        <Styled.Link>GITHUB</Styled.Link>
        <Styled.Link>LINKEDIN</Styled.Link>
        <Styled.Link>RESUME</Styled.Link>
      </Styled.LinksDiv>
    );
  }
}
