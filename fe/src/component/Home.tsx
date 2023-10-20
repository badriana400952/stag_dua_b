// import Dhasboard from "../feacure/threacd/component/Dhasboard"
// import AddStatus from "../feacure/threacd/coba_coba/AddStatus"
// import ThreadView from "../feacure/threacd/coba_coba/ThreadView"
import AddComent from "../feacure/threacd/component/AddStatus"
import View from "../feacure/threacd/component/view"
import { Box } from '@chakra-ui/react'
// import { Flex, Square, Center } from '@chakra-ui/react'
const Home = () => {

    return (
        <Box color={'black'}  >
            <AddComent/> 
            <View />
            {/* <AddStatus/>
            <ThreadView/> */}
        </Box>
    )
}

export default Home