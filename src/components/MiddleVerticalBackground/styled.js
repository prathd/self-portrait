import styled from 'styled-components';

export const Div = styled.div`
  transform: rotate(270deg);
  margin-top: 300px;
  align-self: center;
  overflow: hidden;
  white-space: nowrap;
  color: #f6f6f6;

  z-index: -1;
`;

export const LeftDiv = styled.div`
  overflow: hidden;
`;

export const RightDiv = styled.div`
  overflow: hidden;
  transform: rotate(180deg);
`;
