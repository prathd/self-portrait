import styled from 'styled-components';

import Text from '../Text';

export const LinksDiv = styled.div`
  position: absolute;
  transform: translateX(-50%) rotate(-90deg) translateX(-65%);
  left: 0;
`;

export const Link = styled(Text)`
  font-family: Avenir-Heavy;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  margin-right: 40px;
`;
