import { Box, Container } from '@chakra-ui/react'
import Layoute from './Layoute'
import Home from './Home'
import LayouteRight from './LayoutRight'

const Dhasboard = () => {
    return (
        <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
            <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
                <Box color={'black'}  flex={'0,5'}  >
                    <Layoute />
                </Box>
                <Box color={'black'}  flex={'1'} >
                    <Home />
                </Box>
                <Box  flex={'0.5'}>
                    <LayouteRight  />
                </Box>
            </Box>
        </Container>
    )
}

export default Dhasboard