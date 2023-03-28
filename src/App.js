import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';

const GloblaStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
*{
  font-family: 'Delicious Handrawn', cursive;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: blue;
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
  colors:{
    primary: 'darkblue',
    secondary: 'blue',
    default: 'yellow',
  },
}

function App() {
  return (
    // style-component <tag></tag>
    // function-componet <tag/>
    <>
    <GloblaStyles/>
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar/>
        <Hero/>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
