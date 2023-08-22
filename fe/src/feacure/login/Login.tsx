import { FormControl, Input, Container, Box, Center, Button, Text } from "@chakra-ui/react"
import './regisLogin.css'
import { FaGithub } from "react-icons/fa";
import { LoginLogic } from "./LoginLogic";
import { Link } from "react-router-dom";


const Login = () => {


    const { handleLogin, setDataUser, dataUser } = LoginLogic()
    // console.table(dataUser)
    // if (loading) {
    //     return <Heading marginTop={"20px"}>Loading...</Heading >;
    // }

    // if (error) {
    //     return <Heading marginTop={"20px"}>Error: {error}</Heading >;
    // }

    return (
        <>
            <Center marginTop={'80px'}>
                <Container maxW='container.xl' >
                    <Center  ><FaGithub fontSize={'50px'} /></Center>
                    <Text className="fon" align={'center'} margin={'20px'} fontSize={'25px'}>Sign in to Dumbways</Text>
                    <Box display={'flex'} margin={'auto'} width={'350px'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} border={'2px'} borderColor={'gray.300'} background={'#F6F8FA'}>
                        <Center padding={'11px'} >
                            <form onSubmit={handleLogin}>
                                <FormControl >
                                    <Box marginTop={'20px'}>
                                        <Text marginBottom={'10px'} className="fon">Email address</Text>
                                        <Input name='email' onChange={e => setDataUser({ ...dataUser, email: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="email" />
                                    </Box>
                                    <Box marginTop={'20px'}>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Text marginBottom={'10px'} className="fon">Password</Text>
                                            <Text marginBottom={'10px'} className="fon"><Link to={'#'} style={{ color: '#3182CE' }}>Forget Password</Link></Text>
                                        </Box>
                                        <Input name='password' onChange={e => setDataUser({ ...dataUser, password: e.target.value })} placeholder='medium size' size='md' className="fon" width={'300px'} borderRadius={'10px'} type="password" />
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
                    <Text className="fon" margin={'auto'} width={'350px'} justifyContent={'center'} align={'center'} borderRadius={'10px'} border={'2px'} borderColor={'gray.300'} background={'#F6F8FA'} padding={'10px'} fontSize={'14px'}>New to GitHub? <Link to={'/register'} style={{ color: '#3182CE' }}> create an account.</Link></Text>
                </Container>
            </Center>
        </>

    )
}

export default Login
