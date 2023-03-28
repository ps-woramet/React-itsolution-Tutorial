import React from 'react'
import styled from 'styled-components'
import heroImage from '../../images/hero.png'

const Container = styled.div`
margin-top: 20px;
    display: flex;
    height: 90%;
`

const Left = styled.div`
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    width: 60%;
    font-size: 24px;
    font-weight: bold;
    color: darkblue;
    text-align: center;
    margin-bottom: 20px;
`

const Description = styled.p`
    width: 70%;
    font-size: 16px;
    color: gray;
`

const Right = styled.div`
    width: 40%;
    background-color: white;
    display: flex;
    align-items: center;
`
const Image = styled.img`
    width: 500px;
`



function Hero() {
  return (
    <div>
        <Container>
            <Left>
                <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima ipsam repudiandae exercitationem nulla? Officia consequatur sapiente soluta nemo recusandae totam nesciunt, quidem praesentium ipsa quia a ullam? Cupiditate, architecto.
                </Description>
            </Left>
            <Right>
                <Image src={heroImage}/>
            </Right>
        </Container>
    </div>
  )
}

export default Hero
