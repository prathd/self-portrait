import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class AboutBackground extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.GreyDiv>
          {this.props.children}
        </Styled.GreyDiv>
      </Styled.OuterDiv>
    );
  }
}

AboutBackground.propTypes = {
  children: PropTypes.array,
};
