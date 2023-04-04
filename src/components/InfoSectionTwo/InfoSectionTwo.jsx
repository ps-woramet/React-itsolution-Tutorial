import React from 'react'
import styled from 'styled-components'
import sectionImage2 from "../../images/laptopDark.jpg";

export const Container = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: center;
    background-image: url(${ ({ sectionImage }) => sectionImage }) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: ${ ({ height }) => height };
`

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
`

const Description = styled.p`
color: white;
width: 80%;
font-weight: lighter;
font-size: 25px;
padding: 2%;

`

function InfoSectionTwo() {
  return (
    <Container height = "450px" sectionImage={sectionImage2}>
        <TextWrapper>
        <Title>Anywhere Workspace</Title>
        <Description>Enable any employee to work anywhere, anytime with seamless employee experiences.</Description>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, facere!</Description>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, facere!</Description>
        </TextWrapper>
    </Container>
  )
}

export default InfoSectionTwo
