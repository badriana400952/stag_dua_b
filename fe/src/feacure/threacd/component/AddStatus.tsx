import { Box, Heading, Image } from "@chakra-ui/react"
import { Input, Button } from '@chakra-ui/react'
import './thread.css'
import { BsCameraFill } from "react-icons/bs"
import { HooksViewThread } from "../hoock/HooksViewThread"


const AddComent = () => {
  const { HandleKirim, handleinpit, hendleFile } = HooksViewThread()



  return (
    <>
      <Box margin={"20px"} padding={'10px'}>
        <Heading>Home</Heading>
        <Box marginTop={'20px'} display={'Flex'} >
          <Box width={'10%'} marginTop={'20px'} >
            <Image width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src="https://wallsdesk.com/wp-content/uploads/2017/01/Saitama-Background-.png" alt='ss' />
          </Box>
          <Box width={'80%'} marginTop={'20px'} marginLeft={'20px'}>
            <form onSubmit={HandleKirim} >
              <Box display={'flex'} gap={'5px'}>
                <Box width={"95%"} display={'flex'}>
                  <Box width={'100%'} marginTop={'20px'}>
                    <Input type='text' width={"90%"} name="content" onChange={handleinpit}
                      variant='flushed' placeSelf={'@'} />
                  </Box>
                  <Box width={'20%'} marginTop={"15px"} paddingBottom={'10px'} >
                    <label htmlFor="img">
                      <Button leftIcon={<BsCameraFill />} as={'span'} cursor={'pointer'} />
                    </label>
                    <Input type='file' width={"50%"} id='img' name="aut_img"  onChange={hendleFile}
                      variant='flushed' placeSelf={'@'} display={'none'} />
                  </Box>
                </Box>
                <Box width={'15%'}>
                  <Button mt={4} borderRadius={'20px'} colorScheme='teal' type="submit" >Submit   </Button>
                </Box></Box>
            </form>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default AddComent


