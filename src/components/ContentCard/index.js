import React, { Component } from 'react';

import Text from '../Text';
import LeftLinks from '../LeftLinks';

import * as Styled from './styled';

export default class ContentCard extends Component {
  render() {
    return (
      <Styled.OuterDiv>
        <LeftLinks />
        <Styled.TextDiv>
          <Text
            fontFamily="Avenir"
            fontSize="18px"
            fontWeight="100"
            letterSpacing="0px"
          >
            Bacon ipsum dolor amet prosciutto kevin meatball shoulder tongue. Alcatra
            fatback meatloaf, pork loin rump pig filet mignon turkey beef sausage
            leberkas kielbasa buffalo. Beef ribs spare ribs short loin ribeye boudin,
            bresaola tongue chicken bacon beef buffalo shankle filet mignon sirloin capicola.
            Meatball meatloaf tongue sausage filet mignon, ribeye flank ham shoulder
            cupim beef. Hamburger kevin frankfurter meatloaf beef ribs ribeye bresaola
            pig pork loin ham hock boudin drumstick tenderloin pancetta landjaeger.
            Filet mignon chicken beef ribs hamburger burgdoggen drumstick frankfurter
            kielbasa. Ham hock ground round kevin kielbasa.
          </Text>
        </Styled.TextDiv>
      </Styled.OuterDiv>
    );
  }
}
