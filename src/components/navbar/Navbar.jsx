import React,  {useContext} from 'react'
import styled from 'styled-components'
import { Mytheme } from '../../App'


const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 10%;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-size: 20px;
    text-decoration: None;
    color: ${(props) => props.theme.colors.bgPrimary};
    cursor: pointer;
    &:hover{
        color: red;
    }
`

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
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

  const mytheme = useContext(Mytheme);

  return (
    <Container theme = {mytheme}>
        <Left><Logo theme = {mytheme}>IT Support</Logo></Left>
        <Center><Menu theme = {mytheme}>
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
