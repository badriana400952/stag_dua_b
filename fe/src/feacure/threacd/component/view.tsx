import { Box, Text, Image, Button, Avatar, Center } from '@chakra-ui/react';

import './thread.css'

import { BsFillChatSquareHeartFill, BsFillChatRightTextFill } from "react-icons/bs";
// import Komntar from '../Komntar';
import { Link } from 'react-router-dom';
import { HooksViewThread } from '../hoock/HooksViewThread';
import { MoonLoader } from 'react-spinners';


const View: React.FC = () => {

    const { showImage, setShowImage, datas, isLoading, like, setLike, isLike, setIslike } = HooksViewThread()



    // if (isLoading) {
    //     return <ClockLoader
    //         color="rgba(10, 195, 158, 1)"
    //         cssOverride={{}}
    //         size={73}
    //         speedMultiplier={3}
    //     />
    // }




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
                    datas?.map((data, i) =>
                        <Box key={i} className='shd' marginTop={'10px'}>
                            <Box display={"flex"} p={'10px'} className='boxsh' padding={'20px'}>
                                <Box width={"15%"} marginTop={'15px'} >
                                    {

                                        data.user ? (
                                            <Avatar width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src={data.user.profile_foto} />


                                        ) : (
                                            <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>

                                        )}
                                </Box>
                                <Box marginLeft={"3"}>
                                    <Box display={'flex'} >
                                        {data.user ? (

                                            <Text p={'1'}>{data.user.user_fullName}</Text>
                                        ) : (
                                            <Text p={'1'}>Nama Pengguna Tidak Tersedia</Text>
                                        )}
                                        {data.user && (
                                            <Text p={'1'} color={"gray.500"}>{data.user?.user_name}</Text>
                                        )}
                                        <Text p={'1'} color={"gray.400"}> * {data.postd}</Text>
                                    </Box>
                                    {
                                        showImage && (
                                            <Box width={"100%"} marginTop={'15px'} >
                                                <Image borderRadius={'10px'} onError={() => setShowImage(true)} width={"500px"} height={"250px"} objectFit={"cover"} src={data.aut_img} />
                                            </Box>

                                        )
                                    }
                                    <Link to={`/detail/${data.id}`}>
                                        <Box width={'90%'} marginTop={'15px'}><Text textAlign={"left"} display={'flex'} justifyContent={"left"}>{data.content}</Text></Box>
                                    </Link>

                                    <Box display={'flex'}>
                                        <Box margin={'20px'} cursor={'pointer'}>
                                            <Button onClick={handleClick} color={isLike ? "red" : "gray"} fontSize={'20px'} background={'transparent'}>
                                                <BsFillChatSquareHeartFill > {like} </BsFillChatSquareHeartFill>
                                            </Button>
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