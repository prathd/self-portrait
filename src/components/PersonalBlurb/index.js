import React, { Component } from 'react';

import * as Styled from './styled';
import Text from '../Text';

export default class PersonalBlurb extends Component {
  render() {
    return (
      <Styled.Div>
        <Text
          fontFamily="Homemade Apple"
          fontSize="22px"
          lineHeight="0px"
        >
          Prathmesh Desai
        </Text>
        <Styled.Line />
        <Text
          fontFamily="Myriad Pro"
          fontSize="14px"
          fontWeight="700"
          letterSpacing="1px"
        >
          DEVELOPER | INNOVATOR | WRITER
        </Text>
      </Styled.Div>
    );
  }
}
