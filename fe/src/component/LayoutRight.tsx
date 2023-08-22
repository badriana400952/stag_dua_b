
'use client'
import {
    Avatar, Box, Center, Image, Flex, Text, Button, useColorModeValue, Container,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ApiData, SetAuthToken } from '../lib/Api'
import { User } from '../interface/Thread'

export default function LayouteRight() {

    const [profile, setProfile] = useState<User >([]); // Tipe data profile diubah menjadi User | null

    const profilData = async () => {
        try {
            SetAuthToken(localStorage.token);
            const response = await ApiData.get(`/check`);
            setProfile(response.data.user);
            console.log("Berhasil mendapatkan profil:", response);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(() => {
        profilData()
    }, [])

    // console.log("ini profile", profile)
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
                            src={
                                'https:images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            }
                            objectFit="cover"
                            alt="#"
                        />
                        <Flex justify={'start'} mt={-12} ml={'10px'}>
                            <Avatar width={'30%'} height={'30%'} src={'https:images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'} css={{ border: '4px solid white', }}
                            />
                        </Flex>
                        <Box display={'flex'} justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
                            <Box >
                                <Box display={'flex'} fontWeight={'bold'}>
                                    ✨ <Text fontSize={'15px'}> {profile.user_fullName}   </Text>  ✨
                                </Box>
                                <Text fontSize={'11px'} color={'gray.500'}>@{profile.user_name}</Text>
                                <Text fontSize={'13px'}>ini masih ngambil dari check saya belom membuat root user</Text>
                                <Box display={'flex'} gap={'5px'}>
                                    <Text fontSize={'13px'}> 120</Text>
                                    <Text fontSize={'13px'} color={'gray.500'}> Following</Text>
                                    <Text fontSize={'13px'} > 23 </Text>
                                    <Text fontSize={'13px'} color={'gray.500'} > Followers</Text>
                                </Box>
                            </Box>
                            <Box marginRight={'5px'}>
                                <Button fontSize={'12px'} height={'30px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} boxShadow='dark-lg'> Edit Profile</Button>
                            </Box>

                        </Box>
                        <Box justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
                            <Text>Suggested for you</Text>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'}>
                                    <Avatar
                                        width={'26px'}
                                        height={'26px'}
                                        src={
                                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                        }
                                        css={{
                                            border: '2px solid white',
                                        }}
                                    />
                                    <Box marginX={'10px'}>
                                        <Text fontSize={'13px'}>Badriana</Text>
                                        <Text fontSize={'11px'} color={'gray.500'}>@badrian</Text>
                                    </Box>

                                </Box>
                                <Box marginRight={'5px'}>
                                    <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                </Box>
                            </Box>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'}>
                                    <Avatar
                                        width={'26px'}
                                        height={'26px'}
                                        src={
                                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                        }
                                        css={{
                                            border: '2px solid white',
                                        }}
                                    />
                                    <Box marginX={'10px'}>
                                        <Text fontSize={'13px'}>Izati Islamiah</Text>
                                        <Text fontSize={'11px'} color={'gray.500'}>@nurixah</Text>
                                    </Box>

                                </Box>
                                <Box marginRight={'5px'}>
                                    <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                </Box>
                            </Box>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'}>
                                    <Avatar
                                        width={'26px'}
                                        height={'26px'}
                                        src={
                                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                        }
                                        css={{
                                            border: '2px solid white',
                                        }}
                                    />
                                    <Box marginX={'10px'}>
                                        <Text fontSize={'13px'}>Nurizah</Text>
                                        <Text fontSize={'11px'} color={'gray.500'}>@zaahhh</Text>
                                    </Box>

                                </Box>
                                <Box marginRight={'5px'}>
                                    <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                </Box>
                            </Box>

                        </Box>

                    </Box>
                </Center>
            </Box>
            <Outlet />
        </Container>
    )
}


