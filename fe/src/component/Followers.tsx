import { Avatar, Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import Layoute from './Layoute'
import LayouteRight from './LayoutRight'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Followers = () => {
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
                                <Tab>Followers</Tab>
                                <Tab>Following</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} >
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Badriana</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@badrian</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Adies</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@adies</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Badriana</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@badrian</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Helens</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@helen</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Riswans</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@riswan</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Malikfa-spin</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@malik</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Unfollow</Button>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} >
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Badriana</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@badrian</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Adies</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@adies</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Badriana</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@badrian</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Helens</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@helen</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Riswans</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@riswan</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"}>
                                        <Box display={'flex'} padding={"10px"}>
                                            <Avatar
                                                width={'40px'}
                                                height={'40px'}
                                                src={
                                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                                }
                                                css={{
                                                    border: '2px solid white',
                                                }}
                                            />
                                            <Box marginX={'10px'}>
                                                <Text fontSize={'15px'}>Malikfa-spin</Text>
                                                <Text fontSize={'12px'} color={'gray.500'}>@malik</Text>
                                            </Box>

                                        </Box>
                                        <Box marginRight={'5px'} marginTop={"15px"}>
                                            <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} > Follow</Button>
                                        </Box>
                                    </Box>
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