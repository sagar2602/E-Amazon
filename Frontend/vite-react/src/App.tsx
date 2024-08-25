import { useState } from 'react'
import NavbarMain from './Component/Navbar'
import Container from 'react-bootstrap/Container';
import Signup from './Component/Auth/Signup'
import AuthPage from './Component/Auth/AuthPage';
import AppWrapper from './Component/AppWrapper'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components';

import './App.css'



const StyledPage = styled.div`
  background-color: red;
  min-height: 100vh; /* Ensure the page takes up at least the full viewport height */
  overflow: hidden; /* Prevent any content from overflowing */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


const StyledContainer = styled(Container)`
  margin-top: 100px;
  background-color: black; 
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {
  const [count, setCount] = useState(0)

//   return (
//     <>
     
//   <NavbarMain />
//   <StyledContainer>
//   <Container style={{ marginTop: '70px' , background-color : ''}}>
//         <Signup />
//       </Container>
// </StyledContainer>

//     </>
//   )
return (
  // Opening the AppWrapper component with a default gradient background
  <AppWrapper>
    {/* Uncomment if you want to use StyledPage and StyledContainer components */}
    {/* <StyledPage> */}
      {/* <StyledContainer> */}
        {/* <> */}
          {/* Your application components */}
          <NavbarMain />
          <AuthPage />
        {/* </> */}
      {/* </StyledContainer> */}
    {/* </StyledPage> */}
  </AppWrapper>
);

}

export default App
