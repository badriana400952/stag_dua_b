import { Avatar, Box, Button, Center, Container, Image, Input, Text } from '@chakra-ui/react';


import Layoute from '../../../component/Layoute';
import LayouteRight from '../../../component/LayoutRight';
import { FaChevronLeft } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HooksDetailThread } from '../hoock/HooksDetailThread';
import { MoonLoader } from 'react-spinners';


const Detail = () => {
    const { dataComentar,
        handleClick,
        handleKirim,
        comment,
        setComment,
        detail,
        showImage,
        isLike,
        like,
        setShowImage, } = HooksDetailThread()

    return (

        <>
            <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >

                <Box marginTop={'20px'}>
                    <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
                        <Box color={'black'} flex={'0,5'}  >
                            <Layoute />
                        </Box>
                        <Box color={'black'} flex={'1'} >
                            <Link to='/'><Button ><FaChevronLeft /> Kembali</Button></Link>
                            {detail ? (

                                <Box boxShadow='2xl'>
                                    <Box display={"flex"} color={'black'} p={'10px'} mt={"5"} className='boxsh'>
                                        <Box width={"15%"} marginTop={'15px'} >
                                            <Avatar width={"70px"} padding={'10px'} height={"65px"} borderRadius={"50%"} objectFit={"cover"} src={detail.aut_img} />
                                        </Box>
                                        <Box marginLeft={"3"}>
                                            <Box display={'flex'} >
                                                <Text p={'1'}>{detail.user?.user_fullName} {detail.id}</Text>
                                                <Text p={'1'} color={"gray.400"}>@{detail.user?.user_name}</Text>
                                                <Text p={'1'} color={"gray.400"}>.{detail.postd}</Text>
                                            </Box>
                                            <Box width={"100%"} marginTop={'15px'} >
                                                {
                                                    showImage && (
                                                        <Image borderRadius={'10px'} onError={() => setShowImage(true)} width={"90%"} height={"300px"} objectFit={"cover"} src={detail.aut_img} alt='ss' />
                                                    )
                                                }
                                            </Box>
                                            <Box width={'90%'} marginTop={'15px'}><Text textAlign={"left"} justifyContent={"left"}>{detail.content}</Text></Box>
                                            <Box display={'flex'}>
                                                <Box margin={'20px'}>
                                                    <Button p={'2px'} onClick={handleClick} colorScheme={isLike ? "red" : "gray"} >{like}</Button>
                                                </Box>
                                                <Text margin={'20px'} paddingY={5} paddingX={20} borderRadius={5} background={'gray.200'}>{detail.replies}</Text>
                                            </Box>
                                            <Box>
                                                <Box boxShadow='md' marginLeft={"-10px"} marginBottom={"20px"}>
                                                    <form onSubmit={handleKirim}>
                                                        <Box marginTop={'20px'} height={'90px'} width={'600px'} padding={'10px'} display={'flex'} justifyContent={'space-around'} >
                                                            <Input padding={'10px'} isTruncated type="text" value={comment.comment} name="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })} placeholder='Tamggapan anda?' width={'80%'} />
                                                            <Button type='submit' width={'10%'}>
                                                                <FaTelegramPlane />
                                                            </Button>
                                                        </Box>
                                                    </form>
                                                </Box>
                                                <Box marginBottom={"20px"} width={'100%'} borderColor={"gray.200"} borderRadius={"12px"} boxShadow={'md'}>
                                                    {dataComentar && dataComentar?.map((data, i) =>
                                                        <Box border={"2px"} borderColor={"gray.200"} borderRadius={"12px"} boxShadow={'md'} marginTop={'20px'} padding={'10px'}>
                                                            <Box key={i}>
                                                                <Box display={'flex'} width={'100%'}  >
                                                                    <Box padding={'10px'}>
                                                                        <Avatar width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src={data.user.profile_foto} />
                                                                    </Box>
                                                                    <Box padding={'10px'}>
                                                                        <Text p={'1'} >{data.user.user_name}</Text>
                                                                        <Text>{data.comment}</Text>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    )}
                                                </Box>
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            ) : (
                                <Center>
                                    <Center marginTop={'160px'}>
                                        <MoonLoader
                                            color="#38A169"
                                            size={65}
                                            speedMultiplier={1}
                                        />
                                    </Center>
                                </Center>
                            )}
                        </Box>

                        <Box flex={'0.5'}>
                            <LayouteRight />
                        </Box>
                    </Box>

                </Box >
            </Container>


        </>

    )
}

export default Detail