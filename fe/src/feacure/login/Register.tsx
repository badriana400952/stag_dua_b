import { FormControl, Input, Container, Box, Center, Button, Text } from "@chakra-ui/react"
import './regisLogin.css'
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisUser } from "../../interface/Thread";
import { ApiData } from "../../lib/Api";

const Register = () => {

   

    const [dataUser, setDataUser] = useState<RegisUser>({
        user_name : "",
        user_fullName: "",
        email : "",
        password : ""
    })
    const navigate = useNavigate()

    const handleRegis = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            console.log("Data yang register:", dataUser);
            await ApiData.post(`http://localhost:5000/api/register`, dataUser)
        //    alert("Data berhasi ldi register")
            navigate('/login')
        } catch (error) {
            console.log("gagal", error)
        }
    }

    return (
        <>
            <Center marginTop={'80px'}>
                <Container maxW='container.xl' >
                    <Center  ><FaGithub fontSize={'50px'} /></Center>
                    <Text className="fon" align={'center'} margin={'20px'} fontSize={'25px'}>Sign in to Dumbways</Text>
                    <Box display={'flex'} margin={'auto'} width={'350px'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} border={'2px'} borderColor={'gray.300'} background={'#F6F8FA'}>
                        <Center padding={'11px'} >
                            <form onSubmit={handleRegis}>
                                <FormControl >
                                    <Box >
                                        <Text marginBottom={'10px'} className="fon">Username </Text>
                                        <Input  name='user_name' onChange={e => setDataUser({ ...dataUser, user_name: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="text" />
                                    </Box>
                                    <Box >
                                        <Text marginBottom={'10px'} className="fon">Full Username </Text>
                                        <Input name='user_fullName' onChange={e => setDataUser({ ...dataUser, user_fullName: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="text" />
                                    </Box>
                                    <Box marginTop={'20px'}>
                                        <Text marginBottom={'10px'} className="fon">Email address</Text>
                                        <Input name='email' onChange={e => setDataUser({...dataUser,  email: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="email" />
                                    </Box>
                                    <Box marginTop={'20px'}>
                                        <Text marginBottom={'10px'} className="fon">Password</Text>
                                        <Input name='password' onChange={e => setDataUser({...dataUser,  password: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="password" />
                                    </Box>
                                    <Button type="submit" color={'white'} marginY={'20px'} background={'green.600'} width={'100%'}>Register</Button >
                                </FormControl>
                            </form>
                        </Center>
                    </Box>
                </Container>


            </Center>
            <Center marginTop={'10px'}>
                <Container maxW='container.xl' >
                    <Text className="fon" margin={'auto'} width={'350px'} justifyContent={'center'} align={'center'} borderRadius={'10px'} border={'2px'} borderColor={'gray.300'} background={'#F6F8FA'} padding={'10px'} fontSize={'14px'}>New to GitHub? <Link to={'#'} style={{ color: '#3182CE' }}> Create an account.</Link></Text>
                </Container>
            </Center>
        </>

    )
}

export default Register
