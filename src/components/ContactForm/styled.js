import styled from 'styled-components';

import Text from '../Text';

export const RightDiv = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;

  right: 0;
  background: #F6F6F6;

  @media (max-width: 991px) {
    position: relative;
  }

  @media (min-width: 992px) {
    height: 880px;
    width: 680px;
    top: 100px;
  }

  @media (min-width: 1200px) {
    width: 760px;
  }

  @media (min-width: 1420px) {
    width: 1000px;
  }
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

  @media (max-width: 576px) {
    width: 20px;
  }
`;

export const ContactForm = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 #9B9B9B;
    width: 520px;
    height: 660px;
    align-self: center;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      width: 380px;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InputBox = styled.input`
  padding: 10px 0;
  margin-bottom: 40px;
  width: 340px;

  font-family: Avenir-Black;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;

  border: none;
  border-bottom: solid #979797 1px;

  &::placeholder {
    color: #ABABAB;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    width: 280px;
  }
`;

export const MessageBox = styled.textarea`
  padding: 10px 0;
  margin-bottom: 40px;
  width: 340px;
  height: 160px;

  font-family: Avenir-Black;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;

  border: none;
  border-bottom: solid #979797 1px;

  &::placeholder {
    color: #ABABAB;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 576px) {
    width: 280px;
  }
`;

export const SendButton = styled.input`
  background: #000000;
  border-radius: 10px;
  width: 120px;
  height: 50px;
  cursor: pointer;

  font-family: Avenir-Black;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;

  &:focus {
    outline: none;
  }
`;

export const ContactBlurb = styled(Text)`
  font-family: Avenir-Light;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
