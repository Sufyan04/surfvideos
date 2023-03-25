import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend,AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={'40'} p={'16'} bgColor={'blackAlpha.900'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} width={'full'} px={'4'}>
          <Heading textTransform={'uppercase'} size={'md'} margin={'auto'}>
            Want to improve this Project?
          </Heading>
          <HStack py="2px">
            <Input
              border={'none'}
              borderBottom={'2px solid white'}
              borderLeft={'2px solid orange'}
              placeholder="Enter Your Email.."
              outline={'none'}
              borderRadius={'20px 0 0 20px'}
              focusBorderColor="none"
              _hover={{
                borderLeft: '2px solid white',
                borderBottom: '2px solid orange',
              }}
            />
            <Button
              borderRadius={'0 20px 20px 0'}
              // colorScheme={'orange'}
              p={'0'}
              bgColor={'orange.400'}
              _hover={{ bgColor: 'orange.500' }}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          width={'full'}
          borderLeft={['none', '1px']}
          borderRight={['none', '1px']}
        >
          <Heading textTransform={'uppercase'} size="md">
            VIDEO BOX by SUFYAN
          </Heading>
          <Text>© All Rights Reserved | Sufyan Khan</Text>
          <Text fontSize={'6xl'}
            _hover={{bgColor: "orange.500" , borderRadius:'60px' ,cursor:'pointer'
            
        }}
          >❤</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading>Connect With me</Heading>
          <Button colorScheme={'orange'} variant={'ghost'}>
            <AiFillInstagram />
            <a target={'blank'} href="https://www.instagram.com/khan__sufyan_/">Instagram</a>
          </Button>
          <Button colorScheme={'orange'} variant={'ghost'}>
            <AiFillFacebook/>
            <a target={'blank'} href="https://www.facebook.com/mdsufyan.khan.3551">Facebook</a>
          </Button>
          <Button colorScheme={'orange'}variant={'ghost'}>
           <AiFillGithub/>
            < a target={'blank'} href="https://https://github.com/Sufyan04.com">  Github</a>
          </Button>
          <Button colorScheme={'orange'} variant={'ghost'}><AiFillLinkedin/>
            <a target={'blank'} href="https://https://linkedin.in/khan-sufyan7"> Linkedin</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
