import React, { Component } from 'react';

import * as Styled from './styled';

export default class Construction extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.ConstructionImg src="/images/construction.svg" />
      </Styled.OuterDiv>
    );
  }
}
