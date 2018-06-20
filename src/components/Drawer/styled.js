import styled, { css } from 'styled-components';

import Text from '../Text';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => props.showDrawer ? '100%' : '0%'};
  background: white;

  position: absolute;
  top: 0;
  z-index: 1;

  transition: all .5s ease-in-out;
`;

export const ButtonDiv = styled.div`
  align-self: flex-end;
  margin-top: 200px;
  width: 376px;

  @media (min-width: 576px) {
    width: 576px;
  }
`;

export const NavButton = styled(Text)`
  position: relative;
  clear: both;
  float: left;
  margin-bottom: 20px;
  text-decoration: ${(props) => props.active ? 'line-through' : 'underline'};

  margin-left: 40px;

  ${(props) => (!props.active && css`
    &:hover {
      cursor: pointer;
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: 0%;
      top: 50%;
      height: 3px;
      margin-top: -0.5px;
      background: #000;
    }

    &:before {
      left: -2.5px;
    }

    &:after {
      right: 2.5px;
      background: #000;
      transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover:before {
      background: #000;
      width: 100%;
      transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover:after {
      background: transparent;
      width: 100%;
      transition: 0s;
    }
  `)}
`;
