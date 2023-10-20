import { Box, Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { HookEditData } from '../feacure/threacd/hoock/HookEditData'
import Layoute from './Layoute'
import LayouteRight from './LayoutRight'

const EditProfile = () => {
    const { HandleKirim, handleInput, hendleFile,profile } = HookEditData()


    return (
        <>

            <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
                <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} >
                    <Box color={'black'} flex={'0,5'}  >
                        <Layoute />
                    </Box>
                    <Box color={'black'} flex={'1'} >
                        <Container maxW={'container.2xl'} display={'flex'} justifyContent={'center'} mt={20}>
                            <Box width={'70%'} shadow={'xl'} p={8} >
                                <form onSubmit={HandleKirim}>
                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input type='text' name='name' onChange={handleInput} defaultValue={profile.name}/>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Username</FormLabel>
                                        <Input type='text' name='username' onChange={handleInput} defaultValue={profile.username} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Deskripsi</FormLabel>
                                        <Input type='text' name='profile_deskripsi' onChange={handleInput} defaultValue={profile.profile_deskripsi}/>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Image</FormLabel>
                                        <Input type='file' name='profile_picture' onChange={hendleFile} />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <Button type='submit'>
                                            Edit
                                        </Button>
                                    </FormControl>
                                </form>
                            </Box>
                        </Container>
                    </Box>
                    <Box flex={'0.5'}>
                        <LayouteRight />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default EditProfile