import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class BrokenTitle extends Component {
  render() {
    return (
      <Styled.OuterDiv width={this.props.children.length - 4}>
        <Styled.TitleText>{this.props.children}</Styled.TitleText>
        <Styled.GreyDiv>
          <Styled.TitleTextMasked>{this.props.children}</Styled.TitleTextMasked>
        </Styled.GreyDiv>
      </Styled.OuterDiv>
    );
  }
}

BrokenTitle.propTypes = {
  children: PropTypes.string,
};
