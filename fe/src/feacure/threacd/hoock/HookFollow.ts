import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFollow } from '../../../interface/Thread'
import { ApiData, SetAuthToken } from '../../../lib/Api'
import { RootState } from '../../../store/types/rootState'
import { GET_FOLLOW, SET_FOLLOWERS } from '../../../store/rootReduc'

const HookFollow = () => {
    const dispatch = useDispatch()
    const [followrandom, setFollowRandom] = useState<IFollow[]>(); // Tipe data profile diubah menjadi User | null

    const followss = async () => {
        try {
            SetAuthToken(localStorage.token);
            const response = await ApiData.get(`/followes`);
            setFollowRandom(response.data);
            // console.log("Berhasil mendapatkan profil:", response);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(() => {
        followss()
    }, [])

    const followstate = useSelector((state: RootState) => state.follow.followState)
  
    const getFollowing = useCallback(async () => {
        try {
            const response = await ApiData.get(`/follow?type=${followstate}`)
            console.log(response.data)
            dispatch(GET_FOLLOW(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [dispatch,followstate]);
    useEffect(() => {
        getFollowing()
    }, [getFollowing])


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
    // console.log(handleFollower)
  return {handleFollower,followrandom}
}

export default HookFollow