import styled from 'styled-components';

import Text from '../Text';

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 330px;

  @media (min-width: 576px) {
    margin-top: 304px;
  }

  @media (min-width: 768px) {
    margin-top: 278px;
  }

  @media (min-width: 992px) {
    margin-top: 252px;
  }

  @media (min-width: 1200px) {
    margin-top: 226px;
  }

  @media (min-width: 1420px) {
    margin-top: 200px;
  }
`;

export const PictureDiv = styled.div`
  align-self: flex-end;
  position: absolute;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0 2px 4px 0 #9B9B9B;

  /* Mobile */
  @media (max-width: 575px) {
    width: 200px;
    height: 260px;
    align-self: center;
  }

  @media (min-width: 576px) {
    width: 240px;
    height: 312px;
  }

  @media (min-width: 768px) {
    width: 280px;
    height: 364px;
  }

  @media (min-width: 992px) {
    width: 320px;
    height: 416px;
  }

  @media (min-width: 1200px) {
    width: 360px;
    height: 468px;
  }

  @media (min-width: 1420px) {
    width: 400px;
    height: 520px;
  }
`;

export const MyImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const LeftDiv = styled.div`
  align-self: flex-start;
  margin-top: 175px;
`;

export const Strikethrough = styled.div`
  position: absolute;
  margin: 50px 0 0 -20px;
  transform: rotate(-3deg);


  border: 11px solid #000000;
  width: 700px;
`;

export const Arrow = styled.img`
  position: absolute;
  margin: -100px 0 0 300px;
`;

export const Nickname = styled(Text)`
  position: absolute;
  margin: -125px 0 0 420px;
  transform: rotate(-10deg);
`;
