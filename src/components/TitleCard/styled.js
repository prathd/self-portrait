import styled from 'styled-components';

export const PictureDiv = styled.div`
  align-self: flex-end;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0 2px 4px 0 #9B9B9B;

  /* Mobile */
  @media (max-width: 575px) {
    width: 200px;
    height: 260px;
    margin-top: 330px;
    align-self: center;
  }

  @media (min-width: 576px) {
    width: 240px;
    height: 312px;
    margin-top: 304px;
  }

  @media (min-width: 768px) {
    width: 280px;
    height: 364px;
    margin-top: 278px;
  }

  @media (min-width: 992px) {
    width: 320px;
    height: 416px;
    margin-top: 252px;
  }

  @media (min-width: 1200px) {
    width: 360px;
    height: 468px;
    margin-top: 226px;
  }

  @media (min-width: 1420px) {
    width: 400px;
    height: 520px;
    margin-top: 200px;
  }
`;

export const MyImage = styled.img`
  height: 100%;
  width: 100%;
`;
