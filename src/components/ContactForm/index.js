import React, { Component } from 'react';
import * as Styled from './styled';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Styled.RightDiv>
        <Styled.TextTitle>
          <Styled.ContactBlurb>
            Don’t be shy - send me a message! Let’s grab some coffee
          </Styled.ContactBlurb>
          &nbsp;&nbsp;
          <Styled.MugImage src="images/Mug.svg" />
        </Styled.TextTitle>
        <Styled.ContactForm>
          <Styled.Form onChange={(e) => this.onChange(e)}>
            <Styled.InputBox autoComplete="name" name="name" value={this.state.name} type="text" placeholder="YOUR NAME" />
            <Styled.InputBox autoComplete="email" name="email" value={this.state.email} type="text" placeholder="EMAIL ADDRESS" />
            <Styled.InputBox autoComplete="subject" name="subject" value={this.state.subject} type="text" placeholder="SUBJECT" />
            <Styled.MessageBox autoComplete="message" name="message" value={this.state.message} type="text" placeholder="MESSAGE" />
            <Styled.SendButton type="submit" value="SEND" onClick={(e) => this.onSubmit(e)} />
          </Styled.Form>
        </Styled.ContactForm>
      </Styled.RightDiv>
    );
  }
}
