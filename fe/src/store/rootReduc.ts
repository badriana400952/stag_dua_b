import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slice/authSlice';

export const {  AUTH_lOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = authSlice.actions;
export const authReducer = authSlice.reducer;
const rootReducer = combineReducers({
    auth: authReducer
});


export default rootReducer