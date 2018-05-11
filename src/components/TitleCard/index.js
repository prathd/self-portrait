import React, { Component } from 'react';

import Text from '../Text';

import * as Styled from './styled';

export default class TitleCard extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.LeftDiv>
          <Text
            fontFamily="Myriad Pro"
            fontSize="22px"
            fontWeight="600"
            letterSpacing="0.5px"
            color="#4E4E4E"
          >
            $ whoami
          </Text>

          <br />
          <br />

          <Text
            fontFamily="Myriad Pro"
            fontSize="140px"
            fontWeight="700"
            letterSpacing="0px"
            lineHeight="140px"
          >
            <Styled.Strikethrough />
            <Styled.Arrow src="images/curved-arrow.svg" />
            <Styled.Nickname
              fontFamily="Homemade Apple"
              fontSize="44px"
              fontWeight="100"
              letterSpacing="0px"
              lineHeight="44px"
              color="#4E4E4E"
            >
              Prath
            </Styled.Nickname>
            Prathmesh<br />Desai
          </Text>
        </Styled.LeftDiv>
        <Styled.PictureDiv>
          <Styled.MyImage src="images/me.png" />
        </Styled.PictureDiv>
      </Styled.OuterDiv>
    );
  }
}
