import { Flex } from '@chakra-ui/react'
import React from 'react'


const Background = () => {
  return (
    <Flex width='100%' minHeight='200vh' justify='center' align='center' 
    bgImage='url(./images/background.png)'
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat" >
        
    </Flex>
  )
}

export default Background