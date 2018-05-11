import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(e) {
    if (e.keyCode === 27) this.props.toggleDrawer();
  }

  render() {
    return (
      <Styled.Div showDrawer={this.props.showDrawer}>
        <Styled.ButtonDiv>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
            active
          >
            Home.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            About.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Work.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Blog.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="Myriad Pro"
            fontSize="42px"
            fontWeight="700"
          >
            Contact.
          </Styled.NavButton>
        </Styled.ButtonDiv>
      </Styled.Div>
    );
  }
}

Drawer.propTypes = {
  showDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
