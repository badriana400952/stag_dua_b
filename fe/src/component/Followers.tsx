import { Avatar, Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import Layoute from './Layoute'
import LayouteRight from './LayoutRight'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ApiData, SetAuthToken } from '../lib/Api'
import { useDispatch, useSelector } from 'react-redux'
import { GET_FOLLOW, SETFOLLOW_STATE, SET_FOLLOWERS } from '../store/rootReduc'
import { RootState } from '../store/types/rootState'
import { useCallback, useEffect, useState } from 'react'
import { IFollow } from '../interface/Thread'
import FollowersTab from './FollowersComponent/FollowersTab'
const Followers = () => {
    const dispatch = useDispatch()
    
    const followstate = useSelector((state: RootState) => state.follow.followState)
    const folows = useSelector((state: RootState) => state.follow.follows)
    const [followrandom, setFollowRandom] = useState<IFollow[] | undefined>(undefined);


    const followss = async () => {
        try {
            SetAuthToken(localStorage.token);
            const response = await ApiData.get(`/followes`);
            setFollowRandom(response.data);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(() => {
        followss()
    }, [])

    const getFollowing = useCallback(async () => {
        try {
            const response = await ApiData.get(`/follow?type=${followstate}`)
            console.log(response.data)
            dispatch(GET_FOLLOW(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [dispatch,followstate]);

    useEffect(() => {
        getFollowing()
    }, [getFollowing,followstate])


    const handleFollower = async (id: number, followeduserId: number, isFollowed: boolean) => {
        try {
            if (!isFollowed) {
                const response = await ApiData.post(`/follow`, {
                    followed_user_id: followeduserId
                })
                dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }))
                console.log("berhasil follow!", response.data);
            } else {
                const response = await ApiData.delete(`/follow/${followeduserId}`);
                dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }));
                console.log("berhasil unfollow!", response.data);
            }
        } catch (error) {
            console.log(error)

        }
    }
    console.log("folows", folows)
    console.log("followstate  :", followstate)
    console.log("followrandom followrandom :", followrandom)

    return (
        <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
            <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
                <Box color={'black'} flex={'0,5'}  >
                    <Layoute />
                </Box>
                <Box color={'black'} flex={'1'} >
                    <Box justifyContent={'space-between'} gap={'5px'} padding={'10px'} marginTop={"20px"}>
                        <Heading>Followers</Heading>
                        <Tabs marginTop={"20px"}>
                            <TabList display={'flex'} justifyContent={"space-evenly"}>
                                <Tab onClick={() => dispatch(SETFOLLOW_STATE("followers"))}>
                                    Followers</Tab>
                                <Tab onClick={() => dispatch(SETFOLLOW_STATE("followings"))}>
                                    Followings
                                </Tab >
                                <Tab onClick={() => dispatch(SETFOLLOW_STATE("followers") ? dispatch(SETFOLLOW_STATE("followings")) : dispatch(SETFOLLOW_STATE("followers"))) }>
                                    Mungkin anda suka?
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    {/* {folows && folows.map((foll, i) =>
                                        <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={i}>
                                            <Box display={'flex'} padding={"10px"}>
                                                <Avatar
                                                    width={'40px'}
                                                    height={'40px'}
                                                    src="#"
                                                    css={{
                                                        border: '2px solid white',
                                                    }}
                                                    name={foll.name}
                                                />
                                                <Box marginX={'10px'}>
                                                    <Text fontSize={'15px'}>{foll.name}</Text>
                                                    <Text fontSize={'12px'} color={'gray.500'}>@{foll.username}</Text>
                                                </Box>

                                            </Box>
                                            <Box marginRight={'5px'} marginTop={"15px"}>
                                                <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(foll.id, foll.user_id, foll.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {foll.is_followed ? 'Unfollow' : 'Follow'}</Button>
                                            </Box>
                                        </Box>
                                    )} */}
                                    <FollowersTab/>

                                </TabPanel>

                                <TabPanel>
                                    {folows && folows.map((foll, i) =>
                                        <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={i}>
                                            <Box display={'flex'} padding={"10px"}>
                                                <Avatar
                                                    width={'40px'}
                                                    height={'40px'}
                                                    src={`${foll.profile_picture}`}
                                                    css={{
                                                        border: '2px solid white',
                                                    }}
                                                    name={foll.name}
                                                />
                                                <Box marginX={'10px'}>
                                                    <Text fontSize={'15px'}>{foll.name}</Text>
                                                    <Text fontSize={'12px'} color={'gray.500'}>@{foll.username}</Text>
                                                </Box>

                                            </Box>
                                            <Box marginRight={'5px'} marginTop={"15px"}>
                                                <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(foll.id, foll.user_id, foll.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {foll.is_followed ? 'Unfollow' : 'Follow'}</Button>
                                            </Box>
                                        </Box>
                                    )}
                                </TabPanel>
                                <TabPanel>
                                    {/* {folows && folows.map((foll, i) => */}
                                        {/* <Box key={i}> */}
                                            {followrandom && followrandom.map((usr, i) =>
                                                <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={i}>
                                                    <Box display={'flex'} padding={"10px"}>
                                                        <Avatar
                                                            width={'40px'}
                                                            height={'40px'}
                                                            src={`${usr.profile_picture}`}
                                                            css={{
                                                                border: '2px solid white',
                                                            }}
                                                            name={usr.name}
                                                            
                                                        />
                                                        <Box marginX={'10px'}>
                                                            <Text fontSize={'15px'}>{usr.name}</Text>
                                                            <Text fontSize={'12px'} color={'gray.500'}>@{usr.username}</Text>
                                                        </Box>

                                                    </Box>
                                                    {/* {folows && folows.map((foll, i) => */}
                                                    <Box marginRight={'5px'} marginTop={"15px"} key={i}>
                                                        <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(usr.id, usr.user_id, usr.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} >{usr.is_followed ? 'Unfollow' : 'Follow'}</Button>
                                                    </Box>
                                                    {/* )} */}
                                                </Box>
                                            )} 
                                        {/* </Box> */}
                                    {/* )} */}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </Box>
                </Box>
                <Box flex={'0.5'}>
                    <LayouteRight />
                </Box>
            </Box>
        </Container>
    )
}

export default Followers