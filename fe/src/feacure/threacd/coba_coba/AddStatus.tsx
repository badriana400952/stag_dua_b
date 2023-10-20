// import { Box, Heading, Image } from "@chakra-ui/react"
// import { Input, Button } from '@chakra-ui/react'
// import { BsCameraFill } from "react-icons/bs"
// import { useState } from "react"
// import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
// import { RootState } from "../../../store/types/rootState"
// import { useDispatch } from "react-redux"
// import { AddThreadsDatas, GetThreadServer } from "../../../store/slice"
// import { ThreadStatus } from "../../../interface/Thread"
// import { useNavigate } from "react-router-dom"



// const AddStatus = () => {
//   const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
//   const navigate = useNavigate()

//   const [thread, setThread] = useState<ThreadStatus>({
//     content: "",
//     image: null,

//   })


//   const handleinpit = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setThread({
//       ...thread, content: e.target.value
//     })
//   }
//   const hendleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setThread((prevContent) => ({ ...prevContent, image: file }))
//     }
//   }


//   const HandleKirim = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//         const fromdata = new FormData();
//         fromdata.append('content', thread.content);
//         fromdata.append('image', thread.image as File);

//         await dispatch(AddThreadsDatas(fromdata))

//       // if (response.data) {
//       //     setTimeout(async () => {
//       //         await dataStatus();
//       //     }, 5000)
//       // }
//       // navigate("/")

//       GetThreadServer()
//     } catch (error) {
//       console.log(error);
//     }

//   }

//   return (
//     <>
//       <Box margin={"20px"} padding={'10px'}>
//         <Heading>Home</Heading>
//         <Box marginTop={'20px'} display={'Flex'} >
//           <Box width={'10%'} marginTop={'20px'} >
//             <Image width={"50px"} height={"50px"} borderRadius={"50%"} objectFit={"cover"} src="https://wallsdesk.com/wp-content/uploads/2017/01/Saitama-Background-.png" alt='ss' />
//           </Box>
//           <Box width={'80%'} marginTop={'20px'} marginLeft={'20px'}>
//             <form onSubmit={HandleKirim} >
//               <Box display={'flex'} gap={'5px'}>
//                 <Box width={"95%"} display={'flex'}>
//                   <Box width={'100%'} marginTop={'20px'}>
//                     <Input type='text' placeholder="Add a story!" width={"90%"} name="content" onChange={handleinpit}
//                       variant='flushed' placeSelf={'@'} />
//                   </Box>
//                   <Box width={'20%'} marginTop={"15px"} paddingBottom={'10px'} >
//                     <label htmlFor="img">
//                       <Button leftIcon={<BsCameraFill />} as={'span'} cursor={'pointer'} />
//                     </label>
//                     <Input type='file' width={"50%"} id='img' name="image" onChange={hendleFile}
//                       variant='flushed' placeSelf={'@'} display={'none'} />
//                   </Box>
//                 </Box>
//                 <Box width={'15%'}>
//                   <Button mt={4} borderRadius={'20px'} colorScheme='teal' type="submit" >Submit   </Button>
//                 </Box></Box>
//             </form>
//           </Box>
//         </Box>

//       </Box>
//     </>
//   )
// }

// export default AddStatus



