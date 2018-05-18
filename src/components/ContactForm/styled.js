import styled from 'styled-components';

export const RightDiv = styled.div`
  width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 100px;
  height: 880px;
  right: 0;
  background: #F6F6F6;
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

    display: flex;
    align-items: center;
    justify-content: center;
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
