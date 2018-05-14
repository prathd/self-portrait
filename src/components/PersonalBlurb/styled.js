import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 200px;
  align-self: flex-start;

  @media (max-width: 576px) {
    margin-left: 40px;
  }
`;

export const Line = styled.hr`
  width: 80px;
  margin: 20px 0;
  border: solid 1px #979797;
`;
