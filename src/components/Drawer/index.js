import React, { Component } from 'react';

import * as Styled from './styled';

export default class Drawer extends Component {
  render() {
    return (
      <Styled.Div>
        <Styled.ButtonDiv>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
            active
          >
            Home.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            About.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Work.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Blog.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Contact.
          </Styled.NavButton>
        </Styled.ButtonDiv>
      </Styled.Div>
    );
  }
}
