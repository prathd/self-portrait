import React, { Component } from 'react';

import Text from '../Text';

import * as Styled from './styled';

export default class TimelineCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          company: 'HORIZONS SCHOOL OF TECHNOLOGY',
          role: 'Instructor &#38; Curriculum Creator',
        }, {
          company: 'THINKFUL',
          role: 'Mentor',
        }, {
          company: 'FARMLOGS',
          role: 'Software Engineering Intern',
        }, {
          company: 'HUBDOC',
          role: 'Software Marketer &#38; Web Developer',
        }, {
          company: 'UNIVERSITY OF WATERLOO',
          role: 'Student (Dropped Out ¯&#92;_(ツ)_/¯)',
        }, {
          company: 'UNIVERSITY OF TENNESSEE',
          role: 'Cancer Research Intern (Pathology Dept)',
        }, {
          company: 'TADPOLE',
          role: `
            <a href="https://waitbutwhy.com/2018/04/picking-career.html" target="_blank">
              Click for Context
            </a>
          `,
        },
      ],
    };
  }

  render() {
    return (
      <Styled.OuterDiv>
        <Styled.TextDiv>
          <Text
            fontFamily="Avenir-Heavy"
            fontSize="10px"
            color="#000000"
            letterSpacing="0"
          >
            PRESENT
          </Text>
        </Styled.TextDiv>

        <Styled.VerticalLine />

        {
          this.state.data.map((exp, idx) => {
            const Div = (idx % 2) ? Styled.LeftDiv : Styled.RightDiv;

            return (
              <Styled.TimelineDiv>
                <Div>
                  {!(idx % 2) ? <Styled.Circle right /> : null}
                  <Styled.TimelineText right={idx % 2}>
                    <Text
                      fontFamily="Avenir-Book"
                      fontSize="18px"
                      color="#000000"
                      letterSpacing="0"
                      dangerouslySetInnerHTML={{ __html: exp.company }}
                    />
                    <br />
                    <Text
                      fontFamily="Avenir-Book"
                      fontSize="14px"
                      color="#9B9B9B"
                      letterSpacing="0"
                      dangerouslySetInnerHTML={{ __html: exp.role }}
                    />
                  </Styled.TimelineText>
                  {(idx % 2) ? <Styled.Circle left /> : null}
                </Div>
              </Styled.TimelineDiv>
            );
          })
        }
      </Styled.OuterDiv>
    );
  }
}
