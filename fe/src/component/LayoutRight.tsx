
'use client'
import {
    Avatar, Box, Center, Image, Flex, Text, Button, useColorModeValue, Container,
} from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { HookEditData } from '../feacure/threacd/hoock/HookEditData'

export default function LayouteRight() {

const {profile} = HookEditData()

    

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
                                    <Text fontSize={'13px'}> 120</Text>
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
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'}>
                                    <Avatar
                                        width={'26px'}
                                        height={'26px'}
                                        src={`${profile?.profile_picture}`} 
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


