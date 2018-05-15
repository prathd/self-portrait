import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import Text from '../Text';

export const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 40px;
`;

export const Section = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageDiv = styled.div`
  position: relative;
  padding: 100px 135px;
  background-color: ${(props) => props.foregroundColor}
`;

export const Image = styled.img`
  width: 631px;
  height: 423px;
`;

export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100%;
  transform: rotate(-5deg);
  z-index: -1;
`;

export const VerticalDiv = styled.div`
  position: absolute;
  left: 50px;
  bottom: 30px;

  transform-origin: bottom left;
  transform: rotate(-90deg);
`;
export const VerticalTitle = styled(Text)`
  font-family: Avenir-Black;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: 0;
`;
export const VerticalDescription = styled(Text)`
  font-family: Avenir-Light;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: 0;
`;

export const TitlesDiv = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;

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
    right: -2.5px;
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

export const Title = styled(Text)`
  font-family: Avenir-Black;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
`;

export const Description = styled(Text)`
  font-family: Avenir-Light;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
