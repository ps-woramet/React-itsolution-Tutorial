import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    color: tomato;
`

const Subtitle = styled.div`
    font-weight: bold;
    font-size: 50px;
    margin: 5px;
    color: darkblue;
`

function Textbanner({title, subtitle}) {
  return (
    <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default Textbanner
