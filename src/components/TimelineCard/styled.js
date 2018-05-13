import styled from 'styled-components';

export const OuterDiv = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const VerticalLine = styled.div`
  position: absolute;
  height: 100%;
  left: 50%;
  margin: 20px 0 0 -3px;
  border: 3px solid #000000;
`;

export const TextDiv = styled.div`
  text-align: center;
  width: 100%;
`;

export const TimelineDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 40px 0;
`;

export const RightDiv = styled.div`
  position: relative;
  width: 50%;
  align-self: flex-end;
  display: flex;
`;

export const LeftDiv = styled.div`
  position: relative;
  width: 50%;
  align-self: flex-start;
  display: flex;
  justify-content: flex-end;
`;

export const Circle = styled.span`
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
  display: inline-block;
  width: 25px;
  height: 25px;

  margin: ${(props) => props.right ? '0 40px 0 -13.5px' : '0 -13.5px 0 40px'};
`;

export const TimelineText = styled.div`
  text-align: ${(props) => props.right ? 'right' : 'left'}
`;

export const CustomA = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
`;
