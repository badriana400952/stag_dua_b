import Layoute from './Layoute'
import LayouteRight from './LayoutRight'
import { Box, Center, Image, Flex, Container, Text, Button, useColorModeValue, Avatar, Input, Divider } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types/rootState';
import { FaArrowsRotate, FaArrowUpFromBracket, FaEllipsis } from "react-icons/fa6";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaHeart, FaHeartBroken, FaRegChartBar } from "react-icons/fa";
import { HooksViewThread } from '../feacure/threacd/hoock/HooksViewThread';
import moment from 'moment'
import { BsCameraFill } from "react-icons/bs"
import { useEffect, useState } from 'react';
import { User } from '../interface/Thread';
import { ApiData, SetAuthToken } from '../lib/Api';




const Profile = () => {
    const { id } = useParams()
    const threads = useSelector((state: RootState) => state.thread.threads)
    // const auth = useSelector((state: RootState) => state.auth);
    const { showImage, handleLikes, setShowImage, HandleKirim, handleinpit, hendleFile } = HooksViewThread()
    // console.log("thread", threads)
    // console.log("id", id)
    const [profiles, setProfiles] = useState<User>()
    useEffect(() => {
        const fetchData = async () => {
            SetAuthToken(localStorage.token)
            const response = await ApiData.get(`/user/${id}`)
            setProfiles(response.data)
        }
        fetchData()
    },[])
    // console.log('data', profiles)

    return (
        <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
            <Box display={'flex'} width={"1500px"} justifyContent={'space-between'}  >
                <Box color={'black'} flex={'0,5'}  >
                    <Layoute />
                </Box>
                <Box width={'80%'} border={'1px'} borderColor={'gray.200'}>
                    <Center py={6} >
                        <Box
                            maxW={'90%'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'lg'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Image
                                h={'200px'}
                                w={'full'}
                                src={`${profiles?.profile_picture}`} 
                                objectFit="cover"
                                alt="#"
                            />
                            <Flex justify={'start'} mt={"-80px"} ml={'10px'}>
                                <Avatar width={"150px"} height={"150px"} borderRadius={"50%"} src={`${profiles?.profile_picture}`} name={profiles?.username} css={{ border: '4px solid white', }}
                                />
                            </Flex>
                            <Box display={'flex'} justifyContent={'space-between'} gap={'5px'} padding={'10px'}>
                                <Box >
                                    <Box display={'flex'} fontWeight={'bold'}>
                                        ✨ <Text fontSize={'18px'}>
                                            {profiles?.name}
                                        </Text>  ✨
                                    </Box>
                                    <Text fontSize={'15px'} color={'gray.500'}>@
                                        {profiles?.username}
                                        |  id
                                        {profiles?.id}
                                    </Text>
                                    <Text fontSize={'15px'}>
                                        {profiles?.profile_deskripsi}
                                    </Text>
                                    <Box display={'flex'} gap={'5px'}>
                                        <Text fontSize={'15px'}> 120</Text>
                                        <Text fontSize={'15px'} color={'gray.500'}> </Text>
                                        <Text fontSize={'15px'} > 23 </Text>
                                        <Text fontSize={'15px'} color={'gray.500'} > Followers</Text>
                                    </Box>
                                </Box>
                                <Box marginRight={'5px'}>
                                    <Button fontSize={'12px'} height={'30px'} color={'dark'} borderRadius={'20px'} py={'3px'} background={'back'} border={'2px'} borderColor={'gray.200'}>  <Link to={`/editprofil/${profiles?.id}`}>  Edit Profile</Link> </Button>
                                </Box>
                            </Box>

                            <Divider />
                            <Box mt={'20px'} display='flex'>
                                <Box width={'10%'} marginTop={'20px'} >
                                    <Image width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src="https://wallsdesk.com/wp-content/uploads/2017/01/Saitama-Background-.png" alt='ss' />
                                </Box>
                                <Box width={'80%'} marginTop={'20px'} marginLeft={'20px'}>
                                    <form onSubmit={HandleKirim} >
                                        <Box display={'flex'} gap={'5px'}>
                                            <Box width={"95%"} display={'flex'}>
                                                <Box width={'100%'} marginTop={'20px'}>
                                                    <Input type='text' placeholder="Add a story!" width={"90%"} name="content" onChange={handleinpit}
                                                        variant='flushed' placeSelf={'@'} />
                                                </Box>
                                                <Box width={'20%'} marginTop={"15px"} paddingBottom={'10px'} >
                                                    <label htmlFor="img">
                                                        <Button leftIcon={<BsCameraFill />} as={'span'} cursor={'pointer'} />
                                                    </label>
                                                    <Input type='file' width={"50%"} id='img' name="image" onChange={hendleFile}
                                                        variant='flushed' placeSelf={'@'} display={'none'} />
                                                </Box>
                                            </Box>
                                            <Box width={'15%'}>
                                                <Button mt={4} borderRadius={'20px'} colorScheme='teal' type="submit" >Submit   </Button>
                                            </Box></Box>
                                    </form>
                                </Box>
                            </Box>

                            <Box>
                                <Box mt={10}>
                                    {
                                        threads && threads?.map((data, i) => {
                                            if (data.user?.id === profiles?.id) {
                                                return (
                                                    <Box key={i} border={"1px"} borderColor={"gray.200"} className='hov'>
                                                        <Box display={"flex"} justifyContent={'flex-start'} p={'10px'} className='boxsh' >
                                                            <Box width={"10%"} marginTop={'15px'}  >
                                                                {
                                                                    data.user ? (
                                                                        <Avatar marginLeft={'5px'} width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} name={data.user.username} src={`${data.user.profile_picture}`} />


                                                                    ) : (
                                                                        <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>

                                                                    )}
                                                            </Box>
                                                            <Box marginLeft={"3"} width={"90%"} >
                                                                <Box display={'flex'} justifyContent={'space-between'}>
                                                                    <Box display={'flex'}>

                                                                        <Text p={'1'}>{data.user?.username}</Text>

                                                                        {data.user && (

                                                                            <Text p={'1'} color={"gray.500"}>{data.user?.name}</Text>
                                                                        )}
                                                                        <Text p={'1'} color={"gray.400"}> * {moment(data.posted_at).startOf("minute").fromNow()}</Text>
                                                                    </Box>
                                                                    <Box>
                                                                        <FaEllipsis />
                                                                    </Box>
                                                                </Box>
                                                                <Box >
                                                                    <Link to={`/detail/${data.id}`}>
                                                                        <Box width={'90%'} marginTop={'15px'}><Text textAlign={"left"} display={'flex'} justifyContent={"left"}>{data.content}</Text></Box>
                                                                    </Link>
                                                                </Box>
                                                                {
                                                                    showImage && (
                                                                        <Box width={"100%"} marginTop={'15px'} >
                                                                            <Image borderRadius={'10px'} onError={() => setShowImage(true)} width={"600px"} height={"400px"} objectFit={"cover"} src={data.image} />
                                                                        </Box>
                                                                    )
                                                                }
                                                                <Box display={'flex'} justifyContent={'space-between'}>
                                                                    <Box margin={'20px'} cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"} color={data.is_liked ? "red" : "brand.grey"} onClick={() => handleLikes(data.id, data.is_liked)} >  {data.is_liked ? <FaHeart /> : <FaHeartBroken />} {data.likes_count} </Button>
                                                                    </Box>
                                                                    <Box margin={'20px'} paddingTop={'5px'} display={'flex'} justifyContent={'center'}>
                                                                        <Button background={'transparent'} paddingX={'10'}>
                                                                            <Text textAlign={"left"} marginTop={'-3px'} padding={'5px'} display={'flex'} justifyContent={"left"}> {data.replies_count}
                                                                            </Text>
                                                                            <Link to={`/detail/${data.id}`} >
                                                                                <Box marginTop={'1'} padding={'5px'}><BsFillChatRightTextFill /></Box>
                                                                            </Link>
                                                                        </Button>
                                                                    </Box>
                                                                    <Box margin={'20px'} cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"}  > <FaArrowsRotate /> </Button>
                                                                    </Box>
                                                                    <Box margin={'20px'} cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"}  > <FaRegChartBar /></Button>
                                                                    </Box>
                                                                    <Box margin={'20px'} cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"}  > <FaArrowUpFromBracket /></Button>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )
                                            }
                                        })
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Center>
                </Box>
                <Box flex={'0.5'}>
                    <LayouteRight />
                </Box>
            </Box>
           
        </Container>
    )
}

export default Profile