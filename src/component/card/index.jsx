import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "@fontsource/poppins";

const Card_Box = ({
  onClick,
  image,
  name,
  instructions,
  cuisine,
  rating,
  mealType,
}) => {

  const [isSelected, setIsSelected] = useState(false);


  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };
  return (
    <Card
      cursor="pointer"
      w={{ base: "300px", lg: "400px" }}
      borderRadius="12px"
      bgColor="#FAFAFA"
      h={{base:'750px', lg:'650px'}}
    >
      <CardBody 
      onClick={handleClick}
      border={isSelected ? '3px solid' : '' } 
      borderColor={isSelected ? '#004370' : 'gray' }
      borderRadius={isSelected ? '11px' : '' }
      transition="border-color 0.3s"
      >
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          borderRadius="16px"
          w="359px"
          h="256px"
        />
        <Box
          position="absolute"
          top="30px"
          right="30px"
          pb="2px"
          w="100px"
          h="20px"
          fontSize="15px"
          borderRadius="4px"
          bgColor="#000000"
          color="#fff"
          textAlign="center"
        >
          {mealType}
        </Box>

        <Stack mt="6" spacing="3">
          <Heading
            color="#191919"
            size="24px"
            fontWeight="700"
            lineHeight="36px"
          >
            {name}
          </Heading>
          <Text color="#404040" size="14px" fontWeight="400" lineHeight="22px">
            {instructions}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex mt="2" pr="2" alignItems="center">
          <Box mr="2" fontWeight="800" fontSize="14px" lineHeight="24px">
            Cuisine :
            <Box
              as="span"
              ml="2"
              fontWeight="500"
              fontSize="13px"
              lineHeight="23px"
              color="black"
            >
              {cuisine}
            </Box>
          </Box>

          <Box ml="2" mr="2" fontWeight="800" fontSize="14px" lineHeight="24px">
            rating :
            <Box
              as="span"
              ml="2"
              fontWeight="500"
              fontSize="13px"
              lineHeight="23px"
            >
              {rating}
            </Box>
          </Box>
          <Box ml="10">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  pr="4px"
                  key={i}
                  // color={i < rating ? 'teal.500' : 'gray.300'}
                  color="teal.500"
                />
              ))}
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Card_Box;
