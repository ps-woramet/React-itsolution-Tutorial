import React from 'react';
import sectionOneImage from "../../images/section1.png";
import {Title, Container, Wrapper, Right , Image, Left, List, Header, Description, ListItem} from "../Styles/Styled.Section"
function InfoSectionOne() {
  return (
    <Container>
      <Wrapper direction={"row"}>
      <Right>
        <Image src = {sectionOneImage} />
      </Right>
      <Left>
      <Title>Subtitle</Title>
      <Header>header</Header>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eius quasi modi quos eaque nesciunt sunt? Animi autem repellendus aspernatur aliquam consectetur sint obcaecati quae dolorum vitae sunt. Odio, eum?
      </Description>
      <List>
        <ListItem>list item</ListItem>
        <ListItem>list item</ListItem>
        <ListItem>list item</ListItem>
        <ListItem>list item</ListItem>
      </List>
      </Left>
      </Wrapper>
    </Container>
  )
}

export default InfoSectionOne
