import { FormEvent, useState } from 'react'
import Layoute from './Layoute'
import LayouteRight from './LayoutRight'
import { Avatar, Box, Button, Container, FormControl, Input, Text, } from '@chakra-ui/react'
import { ApiData } from '../lib/Api'
import { SET_FOLLOWERS } from '../store/rootReduc'
import { useDispatch } from 'react-redux'
import { IFollow } from '../interface/Thread'
import { BiSearch } from "react-icons/bi";


const Search = () => {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState<IFollow[]>([])
  const dispatch = useDispatch()


  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const datash = await ApiData.get(`/search?q=${search}`)
    setSearchResult(datash.data)
    console.log(datash.data)
  }

  const handleFollower = async (id: number, followeduserId: number, isFollowed: boolean) => {
    try {
      if (!isFollowed) {
        const response = await ApiData.post(`/follow`, {
          followed_user_id: followeduserId
        })
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }))
        console.log("berhasil follow!", response.data);
      } else {
        const response = await ApiData.delete(`/follow/${followeduserId}`);
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }));
        console.log("berhasil unfollow!", response.data);
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
      <Box display={'flex'} width={"1500px"} justifyContent={'space-between'}  >
        <Box color={'black'} flex={'0,5'}  >
          <Layoute />
        </Box>
        <Box>

          <Box width={'80%'}   mt={10}>
            <form onSubmit={handleSearch}>
              <Box display={'flex'} gap={10}>
                <FormControl >
                  <Input type='text'padding={5} borderRadius={'10px'} width={'600px'} name='search' onChange={(e) => setSearch(e.target.value)} placeholder='search' />
                </FormControl>

                <FormControl >
                  <Button type='submit'marginLeft={'10px'}> <BiSearch/></Button>
                </FormControl>
              </Box>
            </form>


          </Box>
          <Box>
            {searchResult.map((foll) => (
              <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={foll.id}>
                <Box display={'flex'} padding={"10px"}>
                  <Avatar
                    width={'40px'}
                    height={'40px'}
                    src={`${foll.profile_picture}`}
                    css={{
                      border: '2px solid white',
                    }}
                    name={foll.name}
                  />
                  <Box marginX={'10px'}>
                    <Text fontSize={'15px'}>{foll.name}</Text>
                    <Text fontSize={'12px'} color={'gray.500'}>@{foll.username}</Text>
                  </Box>

                </Box>
                <Box marginRight={'5px'} marginTop={"15px"}>
                  <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(foll.id, foll.user_id, foll.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {foll.is_followed ? 'Unfollow' : 'Follow'}</Button>
                </Box>
              </Box>
            ))}
          </Box>

        </Box>
        <Box flex={'0.5'}>
          <LayouteRight />
        </Box>
      </Box>

    </Container>
  )
}

export default Search