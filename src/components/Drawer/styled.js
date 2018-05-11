import styled, { keyframes, css } from 'styled-components';

import Text from '../Text';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: white;
  opacity: 0.9;

  position: absolute;
  right: ${(props) => props.showDrawer ? '0%' : '-100%'};
  top: 0;
  z-index: 1;

  transition: 0.5s;
  animation: ${(props) => props.showDrawer ? slideIn : slideOut} 0.5s forwards;
  -webkit-animation: ${(props) => props.showDrawer ? slideIn : slideOut} 0.5s forwards;
`;

export const ButtonDiv = styled.div`
  align-self: flex-end;
  margin-top: 200px;
  width: 100%;

  @media (min-width: 576px) {
    width: 576px;
  }
`;

export const NavButton = styled(Text)`
  position: relative;
  clear:both;
  float:left;
  margin-bottom: 20px;
  text-decoration: ${(props) => props.active ? 'line-through' : 'underline'};

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
