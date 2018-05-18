import styled from 'styled-components';

import Text from '../Text';

export const OuterDiv = styled.div`
  margin-top: 100px;
  position: relative;
`;

export const LeftDiv = styled.div`
  width: 300px;
  margin-bottom: 80px;
  display: flex;
`;

export const RightDiv = styled.div`
  width: 1000px;
  position: fixed;
  display: flex;
  flex-direction: column;

  top: 100px;
  height: 1000px;
  right: 0;
  background: #F6F6F6;
`;

export const IconDiv = styled.div`
  width: 60px;

  @media (max-width: 576px) {
    margin-left: 40px;
  }
`;

export const ContentDiv = styled.div``;

export const Content = styled(Text)`
  font-family: Avenir-Black;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.14px;
`;

export const Icon = styled.img`
  height: 30px;
  margin-bottom: 20px;
`;

export const IconCaption = styled.div`
  transform-origin: top right;
  transform: translateX(-100%) rotate(-90deg);
`;

export const TextTitle = styled.div`
  align-self: center;
  margin: 60px 0 40px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MugImage = styled.img`
  width: 40px;
`;

export const ContactForm = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 #9B9B9B;
    width: 520px;
    height: 660px;
    align-self: center;
`;
