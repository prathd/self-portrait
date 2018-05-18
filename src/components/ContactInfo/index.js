import React, { Component } from 'react';

import Text from '../Text';
import * as Styled from './styled';

export default class ContactInfo extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <Styled.LeftDiv>
          <Styled.IconDiv>
            <Styled.Icon src="images/Location.svg" />
            <Styled.IconCaption>
              <Text
                fontFamily="Avenir-Light"
                fontSize="12px"
                color="#000000"
                letterSpacing="0"
              >
                LOCATION
              </Text>
            </Styled.IconCaption>
          </Styled.IconDiv>
          <Styled.ContentDiv>

            <Text
              fontFamily="Avenir-Light"
              fontSize="16px"
              color="#000000"
              letterSpacing="0.14px"
            >
              MEET ME
            </Text>
            <br />
            <br />
            <Styled.Content>SAN FRANCISCO, CA</Styled.Content>
            <br />
            <Styled.Content>TORONTO, ON</Styled.Content>
            <br />
            <Styled.Content>DALLAS, TX</Styled.Content>
          </Styled.ContentDiv>
        </Styled.LeftDiv>

        <Styled.LeftDiv>
          <Styled.IconDiv>
            <Styled.Icon src="images/Mobile.svg" />
            <Styled.IconCaption>
              <Text
                fontFamily="Avenir-Light"
                fontSize="12px"
                color="#000000"
                letterSpacing="0"
              >
                PHONE
              </Text>
            </Styled.IconCaption>
          </Styled.IconDiv>
          <Styled.ContentDiv>

            <Text
              fontFamily="Avenir-Light"
              fontSize="16px"
              color="#000000"
              letterSpacing="0.14px"
            >
              CALL ME
            </Text>
            <br />
            <br />
            <Styled.Content>+1 628 208 9633 (US)</Styled.Content>
            <br />
            <Styled.Content>+1 519 722 8110 (CA)</Styled.Content>
          </Styled.ContentDiv>
        </Styled.LeftDiv>

        <Styled.LeftDiv>
          <Styled.IconDiv>
            <Styled.Icon src="images/Paper.svg" />
            <Styled.IconCaption>
              <Text
                fontFamily="Avenir-Light"
                fontSize="12px"
                color="#000000"
                letterSpacing="0"
              >
                CONTACT
              </Text>
            </Styled.IconCaption>
          </Styled.IconDiv>
          <Styled.ContentDiv>

            <Text
              fontFamily="Avenir-Light"
              fontSize="16px"
              color="#000000"
              letterSpacing="0.14px"
            >
              EMAIL ME
            </Text>
            <br />
            <br />
            <Styled.Content>d.prathmesh@gmail.com</Styled.Content>
          </Styled.ContentDiv>
        </Styled.LeftDiv>
      </Styled.OuterDiv>
    );
  }
}
