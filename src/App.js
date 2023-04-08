import { useState } from "react";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero/Hero';
import Infoboxes from './components/Infoboxes/Infoboxes';
import Navbar from './components/Navbar/Navbar';
import React, {createContext} from 'react';
import { ThemeProvider } from 'styled-components';
import InfoSectionOne from './components/InfoSectionOne/InfoSectionOne';
import InfoSectionTwo from './components/InfoSectionTwo/InfoSectionTwo';
import InfoSectionThree from './components/InfoSectionThree/InfoSectionThree';
import Teams from './components/Team/Teams';
import InfoSectionfour from './components/InfoSectionfour.jsx/InfoSectionfour';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
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
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgDefault};
`

const theme = {
  colors: {
    primary: "darkBlue",
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

const darktheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceBlue",
    hoverColor: "black",
  },
};


function App() {
  const [mode, setMode] = useState(false);
  return (
    // style-component <tag></tag>
    // function-component <tag/>
    <>
    <ThemeProvider theme={mode ? darktheme : theme}>
      <Mytheme.Provider value = {mode ? darktheme : theme}>
      <GloblaStyles/>
      <Container>
        <Navbar setMode={setMode} mode={mode}/>
        <Hero thistheme = {mode ? darktheme : theme}/>
        <Infoboxes/>
        <InfoSectionOne/>
        <InfoSectionTwo/>
        <InfoSectionThree/>
        <InfoSectionfour/>
        <Teams/>
        <Blogs/>
        <Footer/>
      </Container>
    </Mytheme.Provider>
    </ThemeProvider>
    </>
  );
}

export default App;
