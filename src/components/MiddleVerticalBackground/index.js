import React, { Component } from 'react';

import * as Styled from './styled';
import Text from '../Text';

export default class MiddleVerticalBackground extends Component {
  render() {
    return (
      <Styled.Div>
        <Styled.LeftDiv>
          <Text
            fontFamily="Myriad Pro"
            fontSize="150px"
            lineHeight="150px"
            fontWeight="700"
          >
            BIENVENUE C&#39;EST MOI
          </Text>
        </Styled.LeftDiv>
        <Styled.RightDiv>
          <Text
            fontFamily="Myriad Pro"
            fontSize="150px"
            lineHeight="150px"
            fontWeight="700"
          >
            SELF PORTRAIT
          </Text>
        </Styled.RightDiv>
      </Styled.Div>
    );
  }
}
