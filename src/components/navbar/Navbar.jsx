import React,  {useContext} from 'react'
import styled from 'styled-components'
import { Mytheme } from '../../App'


const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto;
    height: 5%;
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
    @media only screen and (max-width: 600px) {
    display: none;
    }
    //for Tablets and Medium Screens
    @media only screen and (min-width: 600px) {
        display: flex;
    }
    //for laptops and desktops
    @media only screen and (min-width: 992px) {
        display: flex;
    }
`

const Right = styled.div`
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
    display: flex;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    font-size: 15px;
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
    font-size: 15px;
    background-color: ${(props) => props.theme_navbar.colors.bgPrimary};
    border: 2px solid ${(props) => props.theme_navbar.colors.text};;
    cursor: pointer;
    color: ${(props) => props.theme_navbar.colors.text};
    padding: 10px 10px;
    border-radius: 10px;
    &:hover{
        background-color: ${(props) => props.theme_navbar.colors.bgLight};;
        color: ${(props) => props.theme_navbar.colors.bgPrimary};
        border: 2px solid darkblue;
    }
`

const DarkMode = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: ${(props) => props.theme_navbar.colors.light};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
`;

const Navbar = ({ mode, setMode }) =>  {

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
        <Right>
            <Button theme_navbar = {mytheme}>Call us Now!</Button>
            <DarkMode theme_navbar = {mytheme} onClick={() => setMode(!mode)} />
        </Right>
    </Container>
  )
}

export default Navbar
