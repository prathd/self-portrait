import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class Hamburger extends Component {
  render() {
    return (
      <Styled.Div onClick={() => this.props.toggleDrawer()}>
        <Styled.Line
          transform={this.props.showDrawer && 'translateY(0.3em) rotate(45deg)'}
          margin={!this.props.showDrawer ? '0 0 0.3em 0' : '0.5em'}
        />
        <Styled.Line
          hide={this.props.showDrawer}
          margin="0 0 .3em 0"
        />
        <Styled.Line
          transform={this.props.showDrawer && 'translateY(-0.3em) rotate(-45deg)'}
          margin={!this.props.showDrawer ? '0 0 0.3em 0' : '0.5em'}
        />
      </Styled.Div>
    );
  }
}

Hamburger.propTypes = {
  showDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
