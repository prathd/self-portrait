import React, { Component } from 'react';

import * as Styled from './styled';

export default class TitleCard extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.LeftDiv>
          <Styled.ShellText>$ whoami</Styled.ShellText>

          <br />
          <br />

          <Styled.AboutTitle>
            <Styled.Strikethrough />
            <Styled.Arrow src="images/curved-arrow.svg" />
            <Styled.Nickname>Prath</Styled.Nickname>
            Prathmesh<br />Desai
          </Styled.AboutTitle>
        </Styled.LeftDiv>
        <Styled.PictureDiv>
          <Styled.MyImage src="images/me.png" />
        </Styled.PictureDiv>
      </Styled.OuterDiv>
    );
  }
}
