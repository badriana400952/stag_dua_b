import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlice';
import { likeSlice } from './slice/likeslice';
import { followSlice } from './slice/followSlice';
// import threadSlice from './slice/ThreadSlice';

export const { AUTH_lOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = authSlice.actions;
// export const { setThreadLike, addThread, deleteThread,setThreadData} = likeSlice.actions
export const { SET_THREAD, GET_THREADS,LIKE } = likeSlice.actions
export const { GET_FOLLOW, SETFOLLOW_STATE, SET_FOLLOWERS } = followSlice.actions


export const authReducer = authSlice.reducer;
export const likeReducer = likeSlice.reducer
export const followReducer = followSlice.reducer
// export const threadReducer =  threadSlice 
const rootReducer = combineReducers({
    auth: authReducer,
    thread: likeReducer,
    follow: followReducer,
    // thread : threadReducer

});


export default rootReducer