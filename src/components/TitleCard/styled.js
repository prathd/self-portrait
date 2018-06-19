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
  align-self: center;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0 2px 4px 0 #9B9B9B;

  /* Mobile */
  @media (max-width: 575px) {
    width: 200px;
    height: 260px;
    align-self: center;
  }

  @media (max-width: 1199px) {
    margin-top: 100px;
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

    align-self: flex-end;
    position: absolute;
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
  align-self: center;
  margin-top: 125px;

  @media (min-width: 1200px) {
    align-self: flex-start;
    margin-top: 175px;
  }
`;

export const ShellText = styled(Text)`
    font-family: MyriadPro-Regular;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #4E4E4E;
`;

export const Strikethrough = styled.div`
  position: absolute;
  margin: 40px 0 0 -20px;
  transform: rotate(-3deg);

  border: 11px solid #000000;
  width: 400px;

  @media (min-width: 576px) {
    border: 11px solid #000000;
    width: 500px;
  }

  @media (min-width: 768px) {
    border: 11px solid #000000;
    width: 700px;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  margin: -50px 0 0 180px;
  width: 50px;

  @media (min-width: 576px) {
    margin: -100px 0 0 300px;
    width: inherit;
  }
`;

export const Nickname = styled(Text)`
  position: absolute;
  margin: -70px 0 0 250px;
  transform: rotate(-10deg);

  font-family: Homemade Apple;
  font-weight: 100;
  color: #4E4E4E;
  font-size: 28px;
  letter-spacing: 0px;
  line-height: 28px;

  @media (min-width: 576px) {
    margin: -125px 0 0 420px;

    font-size: 34px;
    letter-spacing: 0px;
    line-height: 34px;
  }

  @media (min-width: 768px) {
    font-size: 44px;
    letter-spacing: 0px;
    line-height: 44px;
  }
`;

export const AboutTitle = styled(Text)`
  font-family: MyriadPro-Bold;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: 0px;
  line-height: 80px;

  @media (min-width: 576px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media (min-width: 768px) {
    font-size: 140px;
    line-height: 140px;
  }
`;
