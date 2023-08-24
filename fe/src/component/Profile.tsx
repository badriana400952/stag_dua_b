import {  Box,  Container , Text} from '@chakra-ui/react'
import Layoute from './Layoute'
import LayouteRight from './LayoutRight'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Profile = () => {
    return (
        <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
            <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
                <Box color={'black'} flex={'0,5'}  >
                    <Layoute />
                </Box>
                  <Box>
                    <Text>Profile</Text>
                  </Box>
                <Box flex={'0.5'}>
                    <LayouteRight />
                </Box>
            </Box>
        </Container>
    )
}

export default Profile