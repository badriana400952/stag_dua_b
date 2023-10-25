import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFollow } from "../../interface/Thread";
import { ApiData } from "../../lib/Api";

const initialFollowState: { followState: string; follows: IFollow[] } = {
    followState: "followings", follows: [],
  };

 export const  getfollower = createAsyncThunk("follow/getfollower", async () => {
    const response = await ApiData.get("/followes");
    return response.data
})

export const followSlice = createSlice({
    name: "follow",
    initialState: initialFollowState,
    reducers: {
        GET_FOLLOW: (state, action) => {
            state.follows = action.payload;
        },
        SETFOLLOW_STATE: (state, action) => {
            state.followState = action.payload;
        },
        SET_FOLLOWERS: (state, action: {payload: {id: number, isFollowed: boolean}}) => {
            const {id, isFollowed} = action.payload;
            state.follows = state.follows.map((follow) => {
                if(follow.id === id) {
                    return {...follow, is_followed: !isFollowed}
                }
                return follow
            })
        },

        //
       
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getfollower.pending, (state) => {
    //         state.followState = "loading"
    //     })
    //     builder.addCase(getfollower.fulfilled, (state, action) => {
    //         state.followState = "success"
    //         state.follows = action.payload
    //     })
    //     builder.addCase(getfollower.rejected, (state) => {
    //         state.followState = "failed"
    //     })
    // }
})