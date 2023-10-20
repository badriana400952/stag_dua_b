// import React from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill";
// import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_LOGOUT } from '../store/rootReduc';
import { RootState } from '../store/types/rootState';
import { BsFillPersonFill } from 'react-icons/bs';


const   Layoute = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const threads = useSelector((state: RootState) => state.auth)
    const Logoute = () => {
        dispatch(AUTH_LOGOUT())
        navigate("/")
    }
    return (
        <>
            <Box width={"300px"} padding={'40px'}  >
                <Heading as='h2' size='xl' color={"green.500"} >Circle</Heading>
                <Box marginTop={'15px'} color={'black'}>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsHouseDoor p={2} /> <Link to="/"> Home</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsSearch p={2} /> <Link to="/search"> Search</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsFillHeartFill p={2} /> <Link to="/folowers   "> Followers</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsFillPersonFill p={2} /> <Link to={`/profile/${threads.id}`}> Profile</Link></Box>
                 

                </Box>
                <Button background={"green.500"} color={'white'} borderRadius={'20px'} px={'40px'} marginTop={'10px'}> Create post</Button>

                <Box position={'absolute'} bottom={'10px'}>
                        <Button onClick={Logoute} background={"green.500"} position={"fixed"} bottom={'10px'} color={'white'} paddingX={'40px'} borderRadius={'20px'}>Log Oute</Button>

                </Box>

            </Box>

            <Outlet />
        </>
    )
}

export default Layoute