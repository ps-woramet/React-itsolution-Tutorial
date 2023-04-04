import React,  {useContext} from 'react'
import styled from 'styled-components'
import { Mytheme } from '../../App'


const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto;
    height: 10%;
    background-color: ${(props) => props.theme_navbar.colors.bgDefault};
    display: flex;
    padding-left: 20px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
    -webkit-box-shadow: 20px 33px 46px -15px rgba(0,0,0,0.31);
`

const Logo = styled.h1`
    font-size: 20px;
    text-decoration: None;
    color: ${(props) => props.theme_navbar.colors.primary};
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
    color: ${(props) => props.theme_navbar.colors.textDark};
    cursor: pointer;
    &:hover{
        color: ${(props) => props.theme_navbar.colors.primary};
    }
`

const Button = styled.button`
    font-weight: bold;
    background-color: ${(props) => props.theme_navbar.colors.bgPrimary};
    border: 2px solid ${(props) => props.theme_navbar.colors.text};;
    cursor: pointer;
    color: ${(props) => props.theme_navbar.colors.text};
    padding: 10px 10px;
    border-radius: 10px;
    &:hover{
        background-color: ${(props) => props.theme_navbar.colors.bgLight};;
        color: ${(props) => props.theme_navbar.colors.bgPrimary};;
        border: 2px solid darkblue;
    }
`

function Navbar() {

  const mytheme = useContext(Mytheme);

  return (
    <Container theme_navbar = {mytheme}>
        <Left><Logo theme_navbar = {mytheme}>IT Support</Logo></Left>
        <Center><Menu theme_navbar = {mytheme}>
            <MenuItem theme_navbar = {mytheme}>Home</MenuItem>
            <MenuItem theme_navbar = {mytheme}>About us</MenuItem>
            <MenuItem theme_navbar = {mytheme}>Services</MenuItem>
            <MenuItem theme_navbar = {mytheme}>Contact</MenuItem>
            <MenuItem theme_navbar = {mytheme}>Blog</MenuItem>
            </Menu></Center>
        <Right><Button theme_navbar = {mytheme}>Call us Now!</Button></Right>
    </Container>
  )
}

export default Navbar
