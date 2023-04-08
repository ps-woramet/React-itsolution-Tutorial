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
    @media only screen and (max-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
    }
    //for Tablets and Medium Screens
    @media only screen and (min-width: 600px) {
      background-size: 100% 100%;
      height: 40%;
    }
    //for laptops and desktops
    @media only screen and (min-width: 992px) {
      background-size: cover;
    }
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
    @media only screen and (max-width: 600px) {
      width: 90%;
      font-size: 20px;
      text-align: center;
    }
    //for Tablets and Medium Screens
    @media only screen and (min-width: 600px) {
      width: 80%;
      text-align: center;
    }
    //for laptops and desktops
    @media only screen and (min-width: 992px) {
      width: 40%;
    }

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
