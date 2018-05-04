import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class Text extends Component {
  render() {
    const { children, ...fontStyles } = this.props;
    return (
      <Styled.Span {...fontStyles} >
        {this.props.children}
      </Styled.Span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
};
