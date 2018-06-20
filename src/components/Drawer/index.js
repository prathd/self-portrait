import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import * as Styled from './styled';

class Drawer extends Component {
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

  navigate(route) {
    this.props.history.push(route);
    this.props.toggleDrawer();
  }

  activeRoute(route) {
    return this.props.location.pathname === route;
  }

  render() {
    return (
      <Styled.Div showDrawer={this.props.showDrawer}>
        <Styled.ButtonDiv showDrawer={this.props.showDrawer}>
          <Styled.NavButton
            fontFamily="MyriadPro-Bold"
            fontSize="42px"
            fontWeight="700"
            active={this.activeRoute('/')}
            onClick={() => this.activeRoute('/') ? null : this.navigate('/')}
          >
            Home.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="MyriadPro-Bold"
            fontSize="42px"
            fontWeight="700"
            active={this.activeRoute('/about')}
            onClick={() => this.activeRoute('/about') ? null : this.navigate('/about')}
          >
            About.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="MyriadPro-Bold"
            fontSize="42px"
            fontWeight="700"
            active={this.activeRoute('/portfolio')}
            onClick={() => this.activeRoute('/portfolio') ? null : this.navigate('/portfolio')}
          >
            Work.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="MyriadPro-Bold"
            fontSize="42px"
            fontWeight="700"
            active={this.activeRoute('/blog')}
            onClick={() => this.activeRoute('/blog') ? null : this.navigate('/blog')}
          >
            Blog.
          </Styled.NavButton>
          <Styled.NavButton
            fontFamily="MyriadPro-Bold"
            fontSize="42px"
            fontWeight="700"
            active={this.activeRoute('/contact')}
            onClick={() => this.activeRoute('/contact') ? null : this.navigate('/contact')}
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
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(Drawer);
