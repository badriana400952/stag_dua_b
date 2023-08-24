import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlice';
import { likeSlice } from './slice/likeslice';

export const { AUTH_lOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = authSlice.actions;
// export const { setThreadLike, addThread, deleteThread,setThreadData} = likeSlice.actions
export const { SET_THREAD_LIKE, GET_THREADS } = likeSlice.actions


export const authReducer = authSlice.reducer;
export const likeReducer = likeSlice.reducer
const rootReducer = combineReducers({
    auth: authReducer,
    like: likeReducer

});


export default rootReducer