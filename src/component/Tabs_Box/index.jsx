import {
  border,
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card_Box from "../card";
import Addtoweek from "../button";
import { HamburgerIcon } from "@chakra-ui/icons";
import DummyCard from "../card/DummyCard";

const Tabs_Box = () => {
  const [meals, setMeals] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data.recipes);
      });
  }, []);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };

  return (
    <Box w={{base:'320px', lg:'100%', xxl:'1550px'}} m="auto">
      <Tabs
        position="relative"
        variant="unstyled"
        bgImage="url(./images/background.png)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        W="1250px"
        m='auto'
      >
        <Flex
          backgroundColor="#fff"
          h="100px"
          w={{base:'100%', sm:'100%',md:'100%', lg:'100%',  xl:'100%' }}
          position="sticky"
          zIndex={10}
          top="0"
          gap="110px"
          justify="center"
          align="center"
          color="#004370"
          
        >
          {isMobile ? (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="unstyled"
                p="15px 24px"
                bgColor="#9B9B9B"
                color="#fff"
                borderRadius="0"
               
              />
              <MenuList>
                <MenuItem>All Meals</MenuItem>
                <MenuItem>Week 1</MenuItem>
                <MenuItem>Week 2</MenuItem>
                <MenuItem>Week 3</MenuItem>
                <MenuItem>Week 4</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
            
              <Tab
                fontWeight={600}
                outline="none"
                fontSize="16px"
                lineHeight="24px"
                
                _hover={{
                  outline:'none'
                }}
              >
                All Meals
              </Tab>
              <Tab
                fontWeight={600}
                outline="none"
                fontSize="16px"
                lineHeight="24px"
                _hover={{
                  outline:'none'
                }}
              >
                Week 1
              </Tab>
              <Tab
                fontWeight={600}
                outline="none"
                fontSize="16px"
                lineHeight="24px"
                _hover={{
                  outline:'none'
                }}
              >
                Week 2
              </Tab>
              <Tab
                fontWeight={600}
                outline="none"
                fontSize="16px"
                lineHeight="24px"
                _hover={{
                  outline:'none'
                }}
              >
                Week 3
              </Tab>
              <Tab
                fontWeight={600}
                outline="none"
                fontSize="16px"
                lineHeight="24px"
                _hover={{
                  outline:'none'
                }}
              >
                Week 4
              </Tab>
              <TabIndicator
            height="4px"
            width="24px"
            bg="#004370"
            borderRadius="1px"
            mt="35px" 
          />
              
            </>
          )}
          <Button
            variant="unstyled"
            p="10px 24px"
            borderRadius={0}
            color="#fff"
            onClick={handleClick}
      border={isSelected ? '2px solid' : '' } 
      borderColor={isSelected ? '#004370' : 'gray' }
      bgColor={isSelected ? '#004370' : '#9B9B9B' }
      transition="border-color 0.3s"
      outlineColor='none'
            
          >
            <Addtoweek />
          </Button>
          
        </Flex>

        <TabPanels>
          <TabPanel>
            <SimpleGrid
              mt="90px"
              columns={{ base: 1, lg: 2, xl: 3 }}
              justifyItems="center"
              rowGap={10}
              alignItems='center'
              
              m='auto'
              
            >
              {meals.map((object, index) => {
                return (
                  <Card_Box
                    key={index}
                    object={object}
                    image={object.image}
                    mealType={object.mealType}
                    name={object.name}
                    instructions={object.instructions}
                    cuisine={object.cuisine}
                    rating={object.rating}
                  />
                );
              })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              mt="90px"
              columns={{ base: 1, lg: 2, xl: 3 }}
              justifyItems="center"
              rowGap={10}
            >
              <DummyCard />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              mt="90px"
              columns={{ base: 1, lg: 2, xl: 3 }}
              justifyItems="center"
              rowGap={10}
            >
              <DummyCard />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              mt="90px"
              columns={{ base: 1, lg: 2, xl: 3 }}
              justifyItems="center"
              rowGap={10}
            >
              <DummyCard />
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              mt="90px"
              columns={{ base: 1, lg: 2, xl: 3 }}
              justifyItems="center"
              rowGap={10}
            >
              <DummyCard />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Tabs_Box;
