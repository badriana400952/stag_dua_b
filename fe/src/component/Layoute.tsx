// import React from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";


const Layoute = () => {
    return (
        <>
            <Box width={"250px"} padding={'40px'} >
                <Heading as='h2' size='xl' color={"green.500"} >Circle</Heading>
                <Box marginTop={'15px'} color={'black'}>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsHouseDoor p={2} /> <Link to="/"> Home</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsSearch p={2} /> <Link to="/"> Search</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsFillHeartFill p={2} /> <Link to="/folowers   "> Followers</Link></Box>
                    <Box display={"flex"} gap={'11px'} marginTop={'10px'}> <BsFillPersonFill p={2} /> <Link to="/Profile"> Profile</Link></Box>

                </Box>
                <Button background={"green.500"} color={'white'} borderRadius={'20px'} px={'40px'} marginTop={'10px'}> Create post</Button>

                <Box position={'absolute'} bottom={'10px'}>
                    <Link to={'/login'}>
                        <Button background={"green.500"} position={"fixed"} bottom={'10px'} color={'white'} paddingX={'40px'} borderRadius={'20px'}>Log Oute</Button>

                    </Link>
                </Box>

            </Box>

            <Outlet />
        </>
    )
}

export default Layoute