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
          <button variant="unstyled" outline='none'
            borderRadius={0}
            bgColor="#9B9B9B"
            color="#fff"  
            >
            Add to Week
          </button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            variant="unstyled"
            display="flex"
            w={{base:'320px', lg:'658px'}}
            h={{base:'300px', lg:'412px'}}
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
              fontSize={{base:'20px', lg:"25px"}}
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
                p={{base:'1px 2px', lg:"10px 24px"}}
                fontSize={{base:'8px', lg:"20px"}}
                w={{base:'60px',lg:"150px"}}
                borderRadius={10}
                bgColor=" #CFECFF"
                color="#191919"
                h="48px"
                m="auto"
              >
                Week 1
              </Button>
              <Button
                variant="unstyled"
                p={{base:'1px 2px', lg:"10px 24px"}}
                fontSize={{base:'8px', lg:"20px"}}
                w={{base:'60px',lg:"150px"}}
                borderRadius={10}
                bgColor="#F2F2F2"
                
                h="48px"
                m="auto"
                color="#191919"
              >
                Week 2
              </Button>
              <Button
                variant="unstyled"
                p={{base:'1px 2px', lg:"10px 24px"}}
                fontSize={{base:'8px', lg:"20px"}}
                w={{base:'60px',lg:"150px"}}
                borderRadius={10}
                bgColor="#F2F2F2"
                
                h="48px"
                m="auto"
                color="#191919"
              >
                Week 3
              </Button>

              <Button
                variant="unstyled"
                p={{base:'1px 2px', lg:"10px 24px"}}
                fontSize={{base:'8px', lg:"20px"}}
                w={{base:'60px',lg:"150px"}}
                borderRadius={10}
                bgColor="#F2F2F2"
               
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
                p={{base:'1px 5px', lg:"10px 24px"}}
                fontSize={{base:'12px', lg:"20px"}}
                w={{base:'100px',lg:"200px"}}
                borderRadius={0}
                bgColor=" #004370"
               
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
