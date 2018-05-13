import React, { Component } from 'react';

import * as Styled from './styled';

export default class LeftLinks extends Component {
  render() {
    return (
      <Styled.LinksDiv>
        <Styled.Link>
          <Styled.CustomA
            href="https://twitter.com/prathd"
            target="_blank"
          >
            TWITTER
          </Styled.CustomA>
        </Styled.Link>
        <Styled.Link>
          <Styled.CustomA
            href="https://github.com/prathd"
            target="_blank"
          >
            GITHUB
          </Styled.CustomA>
        </Styled.Link>
        <Styled.Link>
          <Styled.CustomA
            href="https://www.linkedin.com/in/prathmeshdesai/"
            target="_blank"
          >
            LINKEDIN
          </Styled.CustomA>
        </Styled.Link>
        <Styled.Link>
          <Styled.CustomA>
            RESUME
          </Styled.CustomA>
        </Styled.Link>
      </Styled.LinksDiv>
    );
  }
}
