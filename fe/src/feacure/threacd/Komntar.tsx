// import { FaTelegramPlane } from "react-icons/fa";
// import { Container, Input } from '@chakra-ui/react'
// import {
//     Box,
//     Button,
//     Menu,
//     MenuButton,
//     MenuList
// } from '@chakra-ui/react'
// import { BsFillChatRightTextFill } from "react-icons/bs";
// import { useState } from "react";
// import { ApiData } from "../../lib/Api";
// import { ThreadComment } from "../../interface/Thread";
// import { useNavigate } from "react-router-dom";

// const Komntar = () => {
//     const [comment, setComment] = useState<ThreadComment>({
//         comment: "",
//     })
//     const navigate = useNavigate()
//     const handleKirim = async (e: React.FormEvent) => {
//         e.preventDefault()
//         try {
//             const response = await ApiData.post(`/reply`, comment)
//             console.log(response.data)
//             navigate("/thread")
//         } catch (error) {
//             console.log(error)

//         }
//     }
//     // console.log("ini comment", comment)

//     return (
//         <Container>
//             <Menu>
//                 <MenuButton as={Button} rightIcon={<BsFillChatRightTextFill />}>
//                     Replace
//                 </MenuButton>
//                 <MenuList marginLeft={'-200px'} shadow={'2xl'} background={'gray.200'}>
//                     <form onSubmit={handleKirim}>
//                         <Box height={'90px'} width={'600px'} padding={'10px'} display={'flex'} justifyContent={'space-around'} >
//                             <Input type="text" name="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })} placeholder='Here is a sample placeholder' width={'80%'} />
//                             <Button width={'10%'}>
//                                 <FaTelegramPlane />
//                             </Button>
//                         </Box>
//                     </form>
//                 </MenuList>
//             </Menu>
//         </Container>
//     )
// }

// export default Komntar