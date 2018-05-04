import styled from 'styled-components';

export const Div = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
`;

export const Line = styled.hr`
  width: 30px;
  border: solid 1px #979797;
  margin: ${(props) => props.margin};
  transform: ${(props) => props.transform};
  display: ${(props) => props.hide && 'none'}
`;
