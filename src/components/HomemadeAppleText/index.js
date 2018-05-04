import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class HomemadeAppleText extends Component {
  render() {
    return (
      <Styled.Span fontSize={this.props.fontSize}>
        {this.props.children}
      </Styled.Span>
    );
  }
}

HomemadeAppleText.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.string,
};
