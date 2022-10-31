import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import LandingPage from './component/landingPage/LandingPage';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Box>
      <NavBar/>
     <LandingPage/>
     <Footer />
    </Box>
  )
}

export default App