import { Box, Text, Image, Button, Avatar, Center } from '@chakra-ui/react';
import moment from 'moment'
import './thread.css'

import { BsFillChatRightTextFill } from "react-icons/bs";
// import Komntar from '../Komntar';
import { Link } from 'react-router-dom';
import { HooksViewThread } from '../hoock/HooksViewThread';
import { MoonLoader } from 'react-spinners';
import { useState } from 'react';
import { FaHeart,FaHeartBroken } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/rootState';

const View: React.FC = () => {
    const [like, setLike] = useState(0);
    const [isLike, setIslike] = useState(false);
    const { showImage, setShowImage, isLoading } = HooksViewThread()
    const threadsRedux = useSelector ((state: RootState) => state.like.threads)

    
    const handleClick = () => {
        if (isLike) {
            setLike(like - 1)
        } else {
            setLike(like + 1)

        }
        setIslike(!isLike)
    }

    return (

        <Box marginTop={'-5px'} >

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
                        <Box key={i} className='shd' marginTop={'10px'}>
                            <Box display={"flex"} justifyContent={'flex-start'} p={'10px'} className='boxsh' padding={'20px'}>
                                <Box width={"10%"} marginTop={'15px'}  >
                                    {

                                        data.user ? (
                                            <Avatar marginLeft={'5px'} width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} name={data.user.username} src={data.user.profile_picture} />


                                        ) : (
                                            <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>

                                        )}
                                </Box>
                                <Box marginLeft={"3"} width={"90%"}>
                                    <Box display={'flex'} >
                                        {data.user ? (

                                            <Text p={'1'}>{data.user.username}</Text>
                                        ) : (
                                            <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>
                                        )}
                                        {data.user && (
                                            <Text p={'1'} color={"gray.500"}>{data.user?.name}</Text>
                                        )}
                                        <Text p={'1'} color={"gray.400"}> * {moment(data.posted_at).startOf("minute").fromNow()}</Text>
                                    </Box>
                                    {
                                        showImage && (
                                            <Box width={"100%"} marginTop={'15px'} >
                                                <Image borderRadius={'10px'} onError={() => setShowImage(true)} width={"500px"} height={"250px"} objectFit={"cover"} src={data.image} />
                                            </Box>

                                        )
                                    }
                                    <Box maxWidth={"500px"} >
                                        <Link to={`/detail/${data.id}`}>
                                            <Box width={'90%'} marginTop={'15px'}><Text textAlign={"left"} display={'flex'} justifyContent={"left"}>{data.content}</Text></Box>
                                        </Link>
                                    </Box>
                                    <Box display={'flex'}>
                                        <Box margin={'20px'} cursor={'pointer'}>



                                                    <Button paddingX={'10px'} marginTop={"5px"}  onClick={handleClick} > {isLike ? <FaHeart /> : <FaHeartBroken />}<span style={{ marginLeft: '5px' }}> {like}</span> </Button>
                                                
                                                    


                                        </Box>
                                        <Box margin={'20px'} paddingTop={'5px'} display={'flex'} justifyContent={'center'}>
                                            <Button paddingX={'10'}>
                                                <Text textAlign={"left"} marginTop={'-3px'} padding={'5px'} display={'flex'} justifyContent={"left"}> {data.replies_count}
                                                </Text>
                                                <Link to={`/detail/${data.id}`} >

                                                    <Box marginTop={'1'} padding={'5px'}><BsFillChatRightTextFill /></Box>
                                                </Link>

                                            </Button>
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