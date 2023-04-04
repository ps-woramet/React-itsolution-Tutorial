import React from 'react'
import sectionThreeImage from "../../images/section3.png";
import {Title, Container, Wrapper, Right , Image, Left, List, Header, Description, ListItem} from "../Styles/Styled.Section"

function InfoSectionThree() {
  return (
    <Container>
    <Wrapper direction={"row-reverse"}>
    <Right>
      <Image src = {sectionThreeImage} />
    </Right>
    <Left>
    <Title>WHY TRUST US?</Title>
    <Header>Software Asset Management (SAM) / Software Lifecycle Management</Header>
    <Description>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eius quasi modi quos eaque nesciunt sunt? Animi autem repellendus aspernatur aliquam consectetur sint obcaecati quae dolorum vitae sunt. Odio, eum?
    </Description>
    <List>
        <ListItem>list item</ListItem>
        <ListItem>list item</ListItem>
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

export default InfoSectionThree
