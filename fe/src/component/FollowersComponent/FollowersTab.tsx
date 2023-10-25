import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/types/rootState'
import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import { GET_FOLLOW, SET_FOLLOWERS } from '../../store/rootReduc'
import { ApiData } from '../../lib/Api'

const FollowersTab: React.FC = () => {
    const dispatch = useDispatch()
    const followers = useSelector((state: RootState) => state.follow.follows)

    useEffect(() => {

        const getFollowing = async () => {
            try {
                const response = await ApiData.get(`/follow?type=followers`)
                dispatch(GET_FOLLOW(response.data))
            } catch (error) {
                console.log(error)
            }
        }
        getFollowing()
    }, [])
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
        <Box>
            {followers?.map((foll, i: number) => (
                <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={i}>
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
    )
}

export default FollowersTab