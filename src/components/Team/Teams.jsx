import React from 'react'
import styled from 'styled-components'
import avatarImage1 from "../../images/staff1.jpg";
import avatarImage2 from "../../images/staff2.jpg";
import avatarImage3 from "../../images/staff3.jpg";
import avatarImage4 from "../../images/staff4.jpg";
import Textbanner from '../Textbanner/Textbanner';

const Container = styled.div`
    padding: 5%;
`
const Wrapper = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    row-gap: 50px;
`

const Card = styled.div`
    height: 430px;
    width: 250px;
    display: flex;
    margin: 1%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-items: center;
    box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
  -webkit-box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
`

const CardImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
    &:hover{
        cursor: pointer;
        opacity: 0.5
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MemberName = styled.div`
    color: ${(props) => props.theme.colors.primary};
`

const TeamPosition = styled.div`
    color: ${(props) => props.theme.colors.textDark};
`

function Teams() {
  return (
    <Container>
      <Textbanner title = {'Wir union'} subtitle = {'Our Team'}/>
      <Wrapper>
        <Card>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Teams
