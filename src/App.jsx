
import React from 'react'
import './App.css';
import '@fontsource/poppins';
import Hero from './component/hero';
import WeekOrders from './component/weekorders';
import Tabs_Box from './component/Tabs_Box';
import { Box } from '@chakra-ui/react';

function App() {
  // const [isSelected, setIsSelected] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const handleClick = () => {
  //   setIsSelected(!isSelected);
  //   onClick();
  // };

  return (
    <Box
    
      
    >
      <Hero />
      <WeekOrders />
      <Tabs_Box />

   
   </Box>
  )
}

export default App