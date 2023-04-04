import React from 'react'
import styled from 'styled-components'
import heroImage from '../../images/hero.png'

const Container = styled.div`
    padding-top: 50px;
    margin-top: 20px;
    display: flex;
    height: 90%;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme_hero.colors.bgDefault};
`

const Left = styled.div`
    width: 60%;
    background-color: ${(props) => props.theme_hero.colors.bgDefault};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    width: 60%;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme_hero.colors.primary};
    text-align: center;
    margin-bottom: 20px;
`

const Description = styled.p`
    width: 70%;
    font-size: 16px;
    color: ${(props) => props.theme_hero.colors.textDark};;
`

const Right = styled.div`
    width: 40%;
    background-color: ${(props) => props.theme_hero.colors.bgDefault};
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 500px;
    background-color: ${(props) => props.theme_hero.colors.bgDefault};

`

const ButtonsContainer = styled.div`
    display:flex;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
`

const Button = styled.button`
    font-weight: bold;
    color: ${(props) => props.theme_hero.colors.text};
    background-color: ${(props) => props.theme_hero.colors.text};
    margin-left: 5px;
    padding: 15px 35px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid border: 2px solid ${(props) => props.theme_hero.colors.primary};
    background: linear-gradient(to right, ${(props) => props.theme_hero.colors.bgLight} 50%, ${(props) => props.theme_hero.colors.bgSecondary} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    &:hover{
        color: ${(props) => props.theme_hero.colors.bgPrimary}
        border: 2px solid ${(props) => props.theme_hero.colors.primary};
        background-position: left bottom;
        cursor: pointer;
    }
`

function Hero({thistheme}) {

  return (
    <div>
        <Container theme_hero = {thistheme}>
            <Left theme_hero = {thistheme}>
                <Title theme_hero = {thistheme}>IT-Management - IT Support and IT-Services for everyone!</Title>
                <Description theme_hero = {thistheme}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima ipsam repudiandae exercitationem nulla? Officia consequatur sapiente soluta nemo recusandae totam nesciunt, quidem praesentium ipsa quia a ullam? Cupiditate, architecto.
                </Description>
                <ButtonsContainer>
                    <Button theme_hero = {thistheme}>About</Button>
                    <Button theme_hero = {thistheme}>Contact Us</Button>
                </ButtonsContainer>
            </Left>
            <Right theme_hero = {thistheme}>
                <Image theme_hero = {thistheme} src={heroImage}/>
            </Right>
        </Container>
    </div>
  )
}

export default Hero
