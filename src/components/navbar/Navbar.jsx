import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 10%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-size: 20px;
    text-decoration: underline;
    color: darkblue;
    cursor: pointer;
`

const Left = styled.div`
    
`

const Center = styled.div`
    
`

const Right = styled.div`
    
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    font-size: 20px;
    font-weight: bold;
    margin-right: 30px;
    color: gray;
    cursor: pointer;
    &:hover{
        color:darkblue;
    }
`

const Button = styled.button`
    font-weight: bold;
    background-color: darkblue;
    border: 2px solid white;
    cursor: pointer;
    color: white;
    padding: 10px 10px;
    border-radius: 10px;
    &:hover{
        background-color: aliceblue;
        color: darkblue;
        border: 2px solid darkblue;
    }
`

function Navbar() {
  return (
    <Container>
        <Left><Logo>IT Support</Logo></Left>
        <Center><Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Blog</MenuItem>
            </Menu></Center>
        <Right><Button>Call us Now!</Button></Right>
    </Container>
  )
}

export default Navbar
