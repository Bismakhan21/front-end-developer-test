import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const WeekOrders = () => {
  return (
    <Box
    height="90px"
    backgroundImage="url(./images/background.png)"
    backgroundSize="cover"
    backgroundPosition="center"
    ps="50px"
    mb='10px'
  >
    <Flex maxW="1150px" m="auto" h="100%" align="center">
      <Heading fontWeight={600} fontSize="30px" lineHeight="39px">
        Week Orders
      </Heading>
    </Flex>
  </Box>
  )
}

export default WeekOrders