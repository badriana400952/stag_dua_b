// import { Avatar, Box, Input } from "@chakra-ui/react"
// import { Button } from "react-bootstrap"
// import { FaTelegramPlane } from "react-icons/fa";
// import { HooksDetailThread } from "../hoock/HooksDetailThread";
// const { 
//     handleKirim,
//     comment,
//     setComment,
//     detail,
//   } = HooksDetailThread()

// const InputKomentar = () => {
//     return (
//         <>
//             <Box display={'flex'} width={"100%"} border={"1px"} borderColor={"gray.200"}>
//                 <Box width={"65px"} margin={'15px'} >
//                     <Avatar width={"60px"} padding={'10px'} height={"60px"} borderRadius={"50%"} objectFit={"cover"} src={detail.user?.profile_picture} name={detail.user?.username} />
//                 </Box>
//                 <Box>
//                     <form onSubmit={handleKirim}>
//                         <Box marginTop={'20px'} height={'90px'} width={'600px'} padding={'10px'} display={'flex'} justifyContent={'space-around'} >
//                             <Input padding={'10px'} isTruncated type="text" value={comment.comment} name="comment" onChange={(e) => setComment({ ...comment, comment: e.target.value })} placeholder='Tamggapan anda?' width={'80%'} />
//                             <Button type='submit' width={'10%'}>
//                                 <FaTelegramPlane />
//                             </Button>
//                         </Box>
//                     </form>
//                 </Box>
//             </Box> </>
//     )
// }

// export default InputKomentar