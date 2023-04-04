import React from 'react'
import styled from 'styled-components'
import { Button, Card, CardContent, CardImage, CardTitle, Description } from '../Styles/Styled.Card'
import cardImage1 from "../../images/card1.jpg";
import cardImage2 from "../../images/card2.jpg";
import cardImage3 from "../../images/card3.png";
import Textbanner from '../Textbanner/Textbanner';

const Container = styled.div`
    display: grid;
    width: 90%;
    margin: 0 auto;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-items: center;
`

function Blogs() {
  return (
    <>
    <Textbanner title = {'Our Blogs'} subtitle = {'Recent News'} />
    <Container>
      <Card>
        <CardContent padding = {"0.5%"}>
            <CardImage src = {cardImage1}/>
            <CardTitle>Title</CardTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel sapiente laboriosam autem esse? Tempore amet ab a aut unde.
            </Description>
            <Button>
                Read More
            </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent padding = {"0.5%"}>
            <CardImage src = {cardImage2}/>
            <CardTitle>Title</CardTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel sapiente laboriosam autem esse? Tempore amet ab a aut unde.
            </Description>
            <Button>
                Read More
            </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent padding = {"0.5%"}>
            <CardImage src = {cardImage3}/>
            <CardTitle>Title</CardTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel sapiente laboriosam autem esse? Tempore amet ab a aut unde.
            </Description>
            <Button>
                Read More
            </Button>
        </CardContent>
      </Card>
    </Container>
    </>
  )
}

export default Blogs
