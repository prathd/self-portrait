import styled from 'styled-components';

import Text from '../Text';

export const LinksDiv = styled.div`
  position: absolute;
  transform: translateX(-50%) rotate(-90deg) translateX(-65%);
  left: 25px;

  @media (min-width: 576px) {
    left: 0;
  }
`;

export const Link = styled(Text)`
  font-family: Avenir-Heavy;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  margin-right: 40px;

  position: relative;
  clear: both;

  &:hover {
    cursor: pointer;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 0%;
    top: 50%;
    height: 2px;
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
`;

export const CustomA = styled.a`
  color: inherit;
  text-decoration: none;
`;
