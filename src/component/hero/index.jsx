import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    
  } from "@chakra-ui/react";
  
  function Hero() {
    return (
      <Box overflowX='hidden'>
        <Flex
          backgroundImage="url(./images/hero-image.png)"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height="228px"
          justify="center"
          direction="column"
          align="center"
        >
          <Heading fontWeight={700} lineHeight={{ base: '20px', md: '40px', lg: '60px' }} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
            Optimized Your Meal
          </Heading>
          <Text mt={{ base: '10px', md: '15px', lg: '20px' }} fontWeight={400} fontSize={{ base: '10px', md: '13px', lg: '16px' }} lineHeight="20px">
            Select Meal to Add in Week. You will be able to edit. modify and
            change the Meal Weeks.{" "}
          </Text>
        </Flex>
       
      </Box>
    );
  }
  
  export default Hero;
  