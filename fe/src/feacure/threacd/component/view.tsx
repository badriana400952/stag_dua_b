import { Box, Text, Image, Button, Avatar, Center } from '@chakra-ui/react';
import moment from 'moment'
import './thread.css'
import { FaArrowsRotate, FaArrowUpFromBracket, FaEllipsis } from "react-icons/fa6";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaHeart, FaHeartBroken, FaRegChartBar } from "react-icons/fa";
// import Komntar from '../Komntar';
import { Link } from 'react-router-dom';
import { HooksViewThread } from '../hoock/HooksViewThread';
import { MoonLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/rootState';

const View: React.FC = () => {

    const { showImage,handleLikes, setShowImage, isLoading } = HooksViewThread()
    const threadsRedux = useSelector((state: RootState) => state.thread.threads)
    
    console.log("threadsReduxthreadsReduxthreadsRedux", threadsRedux)


    return (

        <Box marginTop={'-5px'} width={'750px'} >

            {
                isLoading ? (
                    <Center marginTop={'160px'}>
                        <MoonLoader
                            color="#38A169"
                            size={65}
                            speedMultiplier={1}
                        />
                    </Center>
                ) : (
                    threadsRedux && threadsRedux?.map((data, i) =>
                        <Box key={i} border={"1px"} borderColor={"gray.200"} className='hov'>
                            <Box display={"flex"} justifyContent={'flex-start'} p={'10px'} className='boxsh' >
                                <Box width={"10%"} marginTop={'15px'}  >
                                    {

                                        data.user ? (
                                            <Avatar marginLeft={'5px'} width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} name={data.user.username} src={data.user?.profile_picture} />


                                        ) : (
                                            <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>

                                        )}
                                </Box>
                                <Box marginLeft={"3"} width={"90%"} >
                                    <Box display={'flex'} justifyContent={'space-between'}>
                                        <Box display={'flex'}>
                                            {data.user ? (
                                                 <Link to={`/profile/${data.user.id}`} >
                                                <Text p={'1'}>{data.user.username}</Text>
                                             </Link>

                                            ) : (
                                                <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>
                                            )}
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
                                            <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"}  color={data.is_liked ? "red" : "brand.grey"} onClick={() => handleLikes(data.id, data.is_liked)} >  {data.is_liked ? <FaHeart /> : <FaHeartBroken />} {data.likes_count} </Button>
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
                )}

        </Box>
    )
}

export default View