import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class Container extends Component {
  render() {
    return (
      <Styled.ResponsiveDiv>
        {this.props.children}
      </Styled.ResponsiveDiv>
    );
  }
}

Container.propTypes = {
  children: PropTypes.array,
};
