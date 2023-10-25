// import { ProfilThread } from '../interface/Thread';
// import { ApiData } from '../lib/Api';
// import Layoute from './Layoute'
// import LayouteRight from './LayoutRight'
// import { useState, useEffect } from 'react'
// import { Avatar, Box, Center, Image, Flex, Text, Button, useColorModeValue, Container } from '@chakra-ui/react'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import { useParams } from 'react-router-dom';





// const Profile = () => {
//     // const [profile, setProfile] = useState<User>([]); // Tipe data profile diubah menjadi User | null
   
//     // const profilData = async () => {
//     //     try {
//     //         SetAuthToken(localStorage.token);
//     //         const response = await ApiData.get(`/check`);
//     //         setProfile(response.data.user);
//     //         console.log("Berhasil mendapatkan profil:", response);
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // }
//     // useEffect(() => {
//     //     profilData()
//     //     // userData()
//     //     // threadData()
//     // }, [])

//     const [posts, setPosts] = useState<ProfilThread[]>([]);
//     const [filteredPosts, setFilteredPosts] = useState<ProfilThread[]>([]);
//     const {id} = useParams()
//     const postIdToFilter = Number(19); // Ganti dengan ID yang Anda inginkan
//     useEffect(() => {
//         // Panggil endpoint API untuk mengambil data postingan
//         const handleee = async () => {
//             try {
//                 const response = await ApiData.get(`/thread/${id}`);
//                 setPosts(response.data.user);
//                 console.log("setPostspostsposts", response.data);

//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         handleee()
//     }, []);

//     useEffect(() => {
//         // Filter postingan berdasarkan ID yang diinginkan
//         const filtered = posts.filter(post => post.id === postIdToFilter);
//         setFilteredPosts(filtered);
//         console.log("filteredfilteredfiltered", filtered)
//     }, [posts, postIdToFilter]);



//     return (
//         <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
//             <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
//                 <Box color={'black'} flex={'0,5'}  >
//                     <Layoute />
//                 </Box>
//                 <Box width={'80%'} border={'1px'} borderColor={'gray.200'}>
//                     <Center py={6} >
//                         <Box
//                             maxW={'90%'}
//                             w={'full'}
//                             bg={useColorModeValue('white', 'gray.800')}
//                             boxShadow={'lg'}
//                             rounded={'md'}
//                             overflow={'hidden'}>
//                             <Image
//                                 h={'200px'}
//                                 w={'full'}
//                                 src={
//                                     'https:images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
//                                 }
//                                 objectFit="cover"
//                                 alt="#"
//                             />
//                             <Flex justify={'start'} mt={"-80px"} ml={'10px'}>
//                                 <Avatar name={profile.username} width={'25%'} height={'25%'} src={'https:images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'} css={{ border: '4px solid white', }}
//                                 />
//                             </Flex>
//                             <Box display={'flex'} justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
//                                 <Box >
//                                     <Box display={'flex'} fontWeight={'bold'}>
//                                         ✨ <Text fontSize={'18px'}> {profile.username}</Text>  ✨
//                                     </Box>
//                                     <Text fontSize={'15px'} color={'gray.500'}>@{profile.name} |  id {profile.id} </Text>
//                                     <Text fontSize={'15px'}>ini masih ngambil dari check saya belom membuat root user</Text>
//                                     <Box display={'flex'} gap={'5px'}>
//                                         <Text fontSize={'15px'}> 120</Text>
//                                         <Text fontSize={'15px'} color={'gray.500'}> Following</Text>
//                                         <Text fontSize={'15px'} > 23 </Text>
//                                         <Text fontSize={'15px'} color={'gray.500'} > Followers</Text>
//                                     </Box>
//                                 </Box>
//                                 <Box marginRight={'5px'}>
//                                     <Button fontSize={'12px'} height={'30px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} boxShadow='dark-lg'> Edit Profile</Button>
//                                 </Box>

//                             </Box>

//                             <Box>
//                                 <Tabs>
//                                     <TabList display={'flex'} justifyContent={"space-evenly"}>
//                                         <Tab>Postingan</Tab>
//                                         <Tab>Balasan</Tab>
//                                         <Tab>Sorotan</Tab>
//                                         <Tab>Media</Tab>
//                                         <Tab>Like</Tab>
//                                     </TabList>

//                                     <TabPanels>
//                                         <TabPanel>
//                                             <Box>
//                                                 {/* Render postingan yang telah difilter */}
//                                                 {filteredPosts.map((post, i) => (
//                                                     <div key={i}>
//                                                         <p>{post.content}</p>
//                                                         <Box width={"100%"} marginTop={'15px'} >
//                                                             <Image borderRadius={'10px'} width={"600px"} height={"400px"} objectFit={"cover"} src={post.image} />
//                                                         </Box>

//                                                     </div>
//                                                 ))}
//                                             </Box>
//                                         </TabPanel>
//                                         <TabPanel>
//                                             <p>Balasan!</p>
//                                         </TabPanel>
//                                         <TabPanel>
//                                             <p>Sorotan!</p>
//                                         </TabPanel>
//                                         <TabPanel>
//                                             <p>Media!</p>
//                                         </TabPanel>
//                                         <TabPanel>
//                                             <p>Like!</p>
//                                         </TabPanel>
//                                     </TabPanels>
//                                 </Tabs>
//                             </Box>
//                         </Box>
//                     </Center>
//                 </Box>
//                 <Box flex={'0.5'}>
//                     <LayouteRight />
//                 </Box>
//             </Box>
//         </Container>
//     )
// }

// export default Profile