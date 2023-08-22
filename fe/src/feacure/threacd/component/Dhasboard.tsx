import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
const Dhasboard = () => {
    return (
        <>
           <Box width={"300px"} height={"100vh"} background={"blackAlpha.100"} marginTop={'5px'}>
                <Box>
                <Heading as='h2' size='xl'>I'm a Heading</Heading>
                </Box>
           </Box>
        </>
    )
}

export default Dhasboard