import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
// import { Form } from 'react-router-dom';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} height={'100vh'} p={'16'}>

    <VStack color={'orange'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload color='orange.900' size={'10vmax'}/>
        <form>
        <HStack>
            <Input required type={'file'} 
                css={{"&::file-selector-button":{
                    border:'none',
                    width:'calc(100% + 36px)',
                    backgroundColor:'white',
                    color:'orangered',
                    height:'100%',
                    marginLeft:'-18px',
                },}}
            
            />
            
            <Button colorScheme={'orange'} type='submit'>Uplaod</Button>
        </HStack>
        </form>
        </VStack>
    
    </Container>
  )
}

export default Upload;