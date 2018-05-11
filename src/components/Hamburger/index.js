import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class Hamburger extends Component {
  render() {
    return (
      <Styled.HamburgerWrapper onClick={() => this.props.toggleDrawer()} className="menu-wrapper">
        <Styled.HamburgerMenu animate={this.props.showDrawer} />
      </Styled.HamburgerWrapper>
    );
  }
}

Hamburger.propTypes = {
  showDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
