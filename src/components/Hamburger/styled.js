import styled, { css } from 'styled-components';

export const HamburgerWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 30px;

  height: 16px;
  z-index: 2;
`;
export const HamburgerMenu = styled.div`
  position: relative;
  transform: translateY(5px);
  background: #979797;
  transition: all 0ms 300ms;

  width: 30px;
  height: 2px;

  ${(props) => (props.animate && css`
    background: rgba(255, 255, 255, 0);
  `)}

  &:before {
    width: 30px;
    height: 2px;
    content: "";
    position: absolute;
    left: 0;
    bottom: 7px;
    background: #979797;
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

    ${(props) => (props.animate && css`
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    `)}
  }

  &:after {
    width: 30px;
    height: 2px;
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    background: #979797;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

    ${(props) => (props.animate && css`
      top: 0;
      transform: rotate(45deg);
      transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
    `)}
  }
`;
