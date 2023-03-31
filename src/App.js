import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero/Hero';
import Infoboxes from './components/Infoboxes/Infoboxes';
import Navbar from './components/navbar/Navbar';
import React, {createContext} from 'react';

export const Mytheme = createContext();


const GloblaStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
  *{
    font-family: 'Delicious Handrawn', cursive;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background-color: white;
    }
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`
const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
`

const theme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlue",
    bgLight: "aliceBlue",
    hoverColor: "aliceBlue",
  },
};

function App() {
  return (
    // style-component <tag></tag>
    // function-component <tag/>
    <>
    <Mytheme.Provider value = {theme}>
      <GloblaStyles/>
      <Container>
        <Navbar/>
        <Hero/>
        <Infoboxes/>
      </Container>
    </Mytheme.Provider>
    </>
  );
}

export default App;
