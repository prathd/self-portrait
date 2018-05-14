import styled from 'styled-components';

import Text from '../Text';

export const OuterDiv = styled.div`
  width: ${(props) => (140 + (15 * props.width))}px;
`;

export const GreyDiv = styled.div`
  position: relative;
  background-color: #ECEAEA;
  width: 100%;
  height: 125px;

  -webkit-clip-path: polygon(0 79%, 100% 62%, 91% 100%, 0 95%);
  clip-path: polygon(0 79%, 100% 62%, 91% 100%, 0 95%);
`;

export const TitleText = styled(Text)`
  position: absolute;
  left: 12px;
  bottom: 9px;

  font-family: MyriadPro-Bold;
  font-size: 42px;
  color: #000000;
  letter-spacing: 0px;
`;

export const TitleTextMasked = styled(Text)`
  position: absolute;
  left: 15px;
  bottom: 10px;

  font-family: MyriadPro-Bold;
  font-size: 42px;
  color: #000000;
  letter-spacing: 0px;
`;
