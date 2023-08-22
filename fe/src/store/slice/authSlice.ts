import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface/Thread";
import { SetAuthToken } from "../../lib/Api";



const initialStateAuth: User = {
    id: 0,
    user_fullName: "",
    user_name: "",
    email: "",
    profile_foto: "",
    profile_desk: "",
}


export const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    reducers: {
        AUTH_lOGIN: (_, action) => {
            const authpayload = action.payload
            SetAuthToken(authpayload.token)
            console.log("ini authpayload", authpayload)
            console.log("ini SetAuthToken", SetAuthToken)
            localStorage.setItem("token", authpayload.token)
            const user: User = {
                id: authpayload.user.id,
                user_fullName: authpayload.user.user_fullName,
                user_name: authpayload.user.user_name,
                email: authpayload.user.email,
                profile_foto: authpayload.user.profile_foto,
                profile_desk: authpayload.user.profile_desk,
            }

            return user
        },
        AUTH_CHECK: (_, action) => {
            const us = action.payload
            SetAuthToken(localStorage.token)
            const user: User = {
                id: us.id,
                user_fullName: us.user_fullName,
                user_name: us.user_name,
                email: us.email,
                profile_foto: us.profile_foto,
                profile_desk: us.profile_desk,
            }

            return user
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem("token")

        },
        AUTH_ERROR: () => {
                        localStorage.removeItem("token")
            return initialStateAuth

        }

    }
})