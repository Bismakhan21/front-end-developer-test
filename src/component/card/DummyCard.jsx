import React from "react";
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

const DummyCard = ({
  onClick,

}) => {
  return (
    <>
    <Card
      onClick={onClick}
      cursor="pointer"
      w={{ base: "300px", lg: "400px" }}
      borderRadius="12px"
      bgColor="#FAFAFA"
    >
      <CardBody>
        <Image
          src="https://cdn.dummyjson.com/recipe-images/1.webp"
          alt='Classic Margherita Pizza'
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
          Dinner
        </Box>

        <Stack mt="6" spacing="3">
          <Heading
            color="#191919"
            size="24px"
            fontWeight="700"
            lineHeight="36px"
          >
            Classic Margherita Pizza
          </Heading>
          <Text color="#404040" size="14px" fontWeight="400" lineHeight="22px">
          Preheat the oven to 475°F (245°C).,
        Roll out the pizza dough and spread tomato sauce evenly.,
        Top with slices of fresh mozzarella and fresh basil leaves.,
        Drizzle with olive oil and season with salt and pepper.,
        Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.,
        Slice and serve hot.
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
              Italine
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
             4.6
            </Box>
          </Box>
          <Box ml="10">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  pr="4px"
                  key={i}
                  color="#004370"
                />
              ))}
          </Box>
        </Flex>
      </CardFooter>
    </Card>

    <Card
      onClick={onClick}
      cursor="pointer"
      w={{ base: "300px", lg: "400px" }}
      borderRadius="12px"
      bgColor="#FAFAFA"
    >
      <CardBody>
        <Image
          src="https://cdn.dummyjson.com/recipe-images/2.webp"
          alt="Vegetarian Stir-Fry"
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
          Lunch
        </Box>

        <Stack mt="6" spacing="3">
          <Heading
            color="#191919"
            size="24px"
            fontWeight="700"
            lineHeight="36px"
          >
            Vegetarian Stir-Fry
          </Heading>
          <Text color="#404040" size="14px" fontWeight="400" lineHeight="22px">
          In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice.
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
              Asian
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
             4.7
            </Box>
          </Box>
          <Box ml="10">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  pr="4px"
                  key={i}
                  color="#004370"
                />
              ))}
          </Box>
        </Flex>
      </CardFooter>
    </Card>

</>

  );
};

export default DummyCard;
