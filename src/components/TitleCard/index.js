import React, { Component } from 'react';

import * as Styled from './styled';

export default class TitleCard extends Component {
  render() {
    return (
      <Styled.PictureDiv>
        <Styled.MyImage src="images/me.png" />
      </Styled.PictureDiv>
    );
  }
}
