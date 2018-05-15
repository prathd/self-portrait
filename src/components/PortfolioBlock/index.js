/* eslint prefer-template: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

export default class PortfolioBlock extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.Section>
          {
            this.props.data.map((project, idx) => (
              <Styled.UnstyledLink smooth to={'#section' + idx}>
                <Styled.TitlesDiv key={project.title}>
                  <Styled.Title>{project.title}</Styled.Title>&nbsp;
                  <Styled.Description>{project.role}</Styled.Description>
                </Styled.TitlesDiv>
              </Styled.UnstyledLink>
            ))
          }
          <Styled.Arrow src="images/down-arrow.svg" />
        </Styled.Section>
        {
          this.props.data.map((project, idx) => (
            <Styled.Section id={'section' + idx} key={project.title}>
              <Styled.ImageDiv foregroundColor={project.foregroundColor}>
                <Styled.BackgroundDiv backgroundColor={project.backgroundColor} />
                <Styled.VerticalDiv>
                  <Styled.VerticalTitle>{project.title}</Styled.VerticalTitle>&nbsp;
                  <Styled.VerticalDescription>{project.role}</Styled.VerticalDescription>
                </Styled.VerticalDiv>
                <Styled.Image src={project.image} />
              </Styled.ImageDiv>
            </Styled.Section>
          ))
        }
      </Styled.OuterDiv>
    );
  }
}

PortfolioBlock.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
