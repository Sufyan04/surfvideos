
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Button,
  useDisclosure,
  DrawerContent,
  VStack,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
         zIndex={'overlay'}
        pos={'fixed'}
        size="20"
        top={4}
        left={4}
        // colorScheme="orange"
        borderRadius={'full'}
        h={10}
        w={10}
        p={0}
        onClick={onOpen}
        bg={"orange.400" }
        _hover={{bg: "orange.600" }}
      >
        <BiMenuAltLeft size="20" /></Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton 
            bgColor={'orange.500'} 
            _hover={{bg: "orange.600" , color:"white"}}
            />
            <DrawerHeader>VIDEO BOX</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
               <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'orange'}
                _hover={{bg: "orange.500" , color:"white"}}
                >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'orange'}
                _hover={{bg: "orange.500" , color:"white"}}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'orange'}
                _hover={{bg: "orange.500" , color:"white"}}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'orange'}
                _hover={{bg: "orange.500" , color:"white"}}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
              <HStack
                pos={'absolute'}
                left="0"
                bottom={5}
                w={'full'}
                justifyContent="space-evenly"
              >
                <Button 
                  onClick={onClose} 
                  colorScheme={'orange'}
                  bg="orange.500"
                >
                  <Link to={'/login'}>Log In</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'outline'}
                  colorScheme={'orange'}
                  _hover={{bg: "orange.500" , color:"white"}}
                  >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

    </>
  );
};

export default Header;



