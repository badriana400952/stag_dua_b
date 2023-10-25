
'use client'
import {
    Avatar, Box, Center, Image, Flex, Text, Button, useColorModeValue, Container,
} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { HookEditData } from '../feacure/threacd/hoock/HookEditData'
// import HookFollow from '../feacure/threacd/hoock/HookFollow'
import { SET_FOLLOWERS } from '../store/rootReduc'
import { ApiData, SetAuthToken } from '../lib/Api'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { IFollow } from '../interface/Thread'

export default function LayouteRight() {

    const { profile } = HookEditData()
    // const  {followrandom} = HookFollow()
    const dispatch = useDispatch()


    const [followrandom, setFollowRandom] = useState<IFollow[]>(); // Tipe data profile diubah menjadi User | null


    useEffect(() => {
        const followss = async () => {
            try {
                SetAuthToken(localStorage.token);
                const response = await ApiData.get(`/followes`);
                setFollowRandom(response.data);
                // console.log("Berhasil mendapatkan profil:", response);
            } catch (error) {
                console.log(error);
            }
        }
        followss()
    }, [])
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


    return (
        <Container >
            <Box >
                <Center py={6} width={'350px'}>
                    <Box
                        maxW={'90%'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'lg'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                            h={'100px'}
                            w={'full'}
                            src={`${profile?.profile_picture}`}
                            objectFit="cover"
                            alt="#"
                        />
                        <Flex justify={'start'} mt={-12} ml={'10px'}>
                            <Avatar name={profile?.username} width={'70px'} height={'70px'} src={`${profile?.profile_picture}`} css={{ border: '4px solid white', }}
                            />
                        </Flex>
                        <Box display={'flex'} justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
                            <Box >
                                <Box display={'flex'} fontWeight={'bold'}>
                                    ✨ <Text fontSize={'15px'}> {profile?.username}</Text>  ✨
                                </Box>
                                <Text fontSize={'11px'} color={'gray.500'}>@{profile?.name} |  id {profile?.id} </Text>
                                <Text fontSize={'13px'}>{profile.profile_deskripsi}</Text>
                                <Box display={'flex'} gap={'5px'}>
                                    <Text fontSize={'13px'}> 111</Text>
                                    <Text fontSize={'13px'} color={'gray.500'}> Following</Text>
                                    <Text fontSize={'13px'} > 23 </Text>
                                    <Text fontSize={'13px'} color={'gray.500'} > Followers</Text>
                                </Box>
                            </Box>
                            <Box marginRight={'5px'}>
                                <Button fontSize={'12px'} height={'30px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} border={'2px'} borderColor={'gray.200'}>  <Link to={`/editprofil/${profile?.id}`}>  Edit Profile</Link> </Button>
                            </Box>

                        </Box>
                        <Box justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
                            <Text>Suggested for you</Text>
                            {
                                followrandom && followrandom.map((data) => (

                                    <Box display={'flex'} justifyContent={'space-between'} key={data.id}>
                                        <Box display={'flex'}>
                                            <Avatar
                                                width={'26px'}
                                                height={'26px'}
                                                src={`${data?.profile_picture}`}
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'13px'}>{data.name}</Text>
                                                <Text fontSize={'11px'} color={'gray.500'}>@{data.username}</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'}>
                                            {/* <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button> */}
                                            {/* <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(data.id, data.user_id, data.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {data.is_followed ? 'Unfollow' : 'Follow'}</Button> */}
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(data.id, data.user_id, data.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {data.is_followed ? 'Unfollow' : 'Follow'}</Button>


                                        </Box>
                                    </Box>
                                ))
                            }



                        </Box>

                    </Box>
                </Center>
            </Box>
            <Outlet />
        </Container>
    )
}


