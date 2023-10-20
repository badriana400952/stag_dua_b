import { Avatar, Box, Button, Center, Container, Image, Input, Text } from '@chakra-ui/react';

import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { FaArrowsRotate, FaArrowUpFromBracket } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import Layoute from '../../../component/Layoute';
import LayouteRight from '../../../component/LayoutRight';
import { FaChevronLeft } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HooksDetailThread } from '../hoock/HooksDetailThread';
import { MoonLoader } from 'react-spinners';
import moment from 'moment';


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
    console.log("detaildetaildetail", detail)
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
                                <Box>
                                    <Box border={"1px"} borderColor={"gray.200"}>
                                        <Box display={"flex"} color={'black'} p={'10px'} mt={"5"} className='boxsh'>
                                            <Box width={"100px"} marginTop={'15px'} >
                                                <Avatar width={"60px"} padding={'10px'} height={"60px"} borderRadius={"50%"} objectFit={"cover"} src={detail.user?.profile_picture} name={detail.user?.username} />
                                            </Box>
                                            <Box marginLeft={"3"} marginTop={"20px"}>
                                                <Box display={'flex'} >
                                                    <Text p={'1'}>{detail.user?.username} |</Text>
                                                    <Text p={'1'} color={"gray.400"}>@{detail.user?.name}</Text>
                                                    <Text p={'1'} color={"gray.400"}>.{moment(detail.posted_at).startOf("minute").fromNow()}</Text>
                                                </Box>
                                                <Box width={"100%"} marginTop={'15px'} >
                                                    {
                                                        showImage && (
                                                            <Image borderRadius={'10px'} onError={() => setShowImage(true)} width={"90%"} height={"300px"} objectFit={"cover"} src={detail.image} alt='ss' />
                                                        )
                                                    }
                                                </Box>
                                                <Box width={'90%'} marginTop={'15px'}><Text textAlign={"left"} justifyContent={"left"}>{detail.content}</Text></Box>
                                                <Box display={'flex'}>
                                                    <Box margin={'20px'}>
                                                        <Button paddingX={'10px'} onClick={handleClick} > {isLike ? <FaHeart /> : <FaHeartBroken />}<span style={{ marginLeft: '5px' }}> {like}</span> </Button>
                                                    </Box>

                                                    <Box gap={'20px'} background={"gray.200"} borderRadius={"5px"} display={"flex"} marginTop={"20px"} height={"40px"} width={"150px"} justifyContent={"center"}>
                                                        <Text marginTop={'5px'}>

                                                            {detail.replies_count}
                                                        </Text>
                                                        <Text marginTop={"10px"}><BsFillChatRightTextFill /></Text>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box display={'flex'} width={"100%"} border={"1px"} borderColor={"gray.200"}>
                                            {/* {dataComentar && dataComentar?.map((data, i) =>
                                            <Box width={"65px"} margin={'15px'} key={i}>
                                                <Avatar width={"60px"} padding={'10px'} height={"60px"} borderRadius={"50%"} objectFit={"cover"} src={data.user?.profile_picture} name={data.user?.username} />
                                            </Box>
                                            )} */}
                                            <Box width={"65px"} margin={'15px'} >
                                                <Avatar width={"60px"} padding={'10px'} height={"60px"} borderRadius={"50%"} objectFit={"cover"} src={detail.user?.profile_picture} name={detail.user?.username} />
                                            </Box>
                                            <Box>
                                                <form onSubmit={handleKirim}>
                                                    <Box marginTop={'20px'} height={'90px'} width={'600px'} padding={'10px'} display={'flex'} justifyContent={'space-around'} >
                                                        <Input padding={'10px'} isTruncated type="text" value={comment.comment} name="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })} placeholder='Tamggapan anda?' width={'80%'} />
                                                        <Button type='submit' width={'10%'}>
                                                            <FaTelegramPlane />
                                                        </Button>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Box>




                                    </Box>
                                    <Box marginBottom={"20px"} width={'100%'} borderColor={"gray.200"} >
                                        {dataComentar && dataComentar?.map((data, i) => {
                                            return (
                                                <Box border={"1px"} borderColor={"gray.200"} padding={'10px'} >
                                                    <Box key={i}>
                                                        <Box display={'flex'}  >
                                                            <Box padding={'10px'}>
                                                                <Avatar width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src={data.user.profile_picture} name={data.user?.username} />
                                                            </Box>
                                                            <Box width={`650px`}>
                                                                <Box padding={'10px'}>
                                                                    <Text >{data.user.name}</Text>
                                                                    <Text>{data.comment}</Text>
                                                                </Box>
                                                                <Box display={'flex'} justifyContent={'space-between'}  >
                                                                    <Box cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"} onClick={handleClick} > {isLike ? <FaHeart /> : <FaHeartBroken />}<span style={{ marginLeft: '5px' }}> {like}</span> </Button>
                                                                    </Box>
                                                                    <Box paddingTop={'5px'} display={'flex'} justifyContent={'center'}>
                                                                        <Button background={'transparent'} paddingX={'10'}>
                                                                            <Text textAlign={"left"} marginTop={'-3px'} padding={'5px'} display={'flex'} justifyContent={"left"}>
                                                                            </Text>

                                                                            <Box marginTop={'1'} padding={'5px'}><BsFillChatRightTextFill /></Box>

                                                                        </Button>
                                                                    </Box>
                                                                    <Box cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"} onClick={handleClick} > <FaArrowsRotate /> </Button>
                                                                    </Box>
                                                                    <Box cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"} onClick={handleClick} > <FaRegChartBar /></Button>
                                                                    </Box>
                                                                    <Box cursor={'pointer'}>
                                                                        <Button background={'transparent'} paddingX={'10px'} marginTop={"5px"} onClick={handleClick} > <FaArrowUpFromBracket /></Button>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            )
                                        }

                                        )}
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