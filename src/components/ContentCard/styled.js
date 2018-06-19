import styled from 'styled-components';

export const OuterDiv = styled.div`
  align-self: center;
`;

export const TextDiv = styled.div`
  align-self: center;
  text-align: justify;

  width: 280px;
  margin: 105px 0;

  @media (min-width: 576px) {
    width: 400px;
    margin: 110px 0;
  }

  @media (min-width: 768px) {
    width: 500px;
    margin: 130px 0;
  }

  @media (min-width: 992px) {
    width: 800px;
    margin: 200px 0;
  }
`;
