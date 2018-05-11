import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class AboutBackground extends Component {
  render() {
    return (
      <Styled.GreyDiv>
        {this.props.children}
      </Styled.GreyDiv>
    );
  }
}

AboutBackground.propTypes = {
  children: PropTypes.array,
};
