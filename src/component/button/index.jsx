import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import React from "react";

const Addtoweek = () => {
  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <button variant="unstyled" outline='none' pb="24px">
            Add to Week
          </button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            variant="unstyled"
            display="flex"
            w="698px"
            h="412px"
            justify="center"
            mr="380px"
          >
            <PopoverArrow />
            <PopoverHeader
            
              mt="10px"
              fontWeight="600"
              fontFamily="poppins"
              w="100%"
              textAlign="center"
              h="39px"
              fontSize="25px"
            >
              Select Week
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody
             
              display="flex"
              flexDirection="row"
              mt='100px'
            >
              <Button
                variant="unstyled"
                p="10px 24px"
                borderRadius={10}
                bgColor=" #CFECFF"
                color="#191919"
                w="150px"
                h="48px"
                m="auto"
              >
                Week 1
              </Button>
              <Button
                variant="unstyled"
                p="10px 24px"
                borderRadius={10}
                bgColor="#F2F2F2"
                w="150px"
                h="48px"
                m="auto"
                color="#191919"
              >
                Week 2
              </Button>
              <Button
                variant="unstyled"
                p="10px 24px"
                borderRadius={10}
                bgColor="#F2F2F2"
                w="150px"
                h="48px"
                m="auto"
                color="#191919"
              >
                Week 3
              </Button>

              <Button
                variant="unstyled"
                p="10px 24px"
                borderRadius={10}
                bgColor="#F2F2F2"
                w="150px"
                h="48px"
                m="auto"
                color="#191919"
              >
                Week 4
              </Button>
            </PopoverBody>
            <Popover>
              <Button
                variant="unstyled"
                p="10px 24px"
                borderRadius={0}
                bgColor=" #004370"
                w="200px"
                h="48px"
                m="auto"
                color="#fff"
              >
                Save
              </Button>
            </Popover>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Addtoweek;
