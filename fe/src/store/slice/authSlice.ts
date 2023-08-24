import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface/Thread";
import { SetAuthToken } from "../../lib/Api";



const initialStateAuth: User = {
    id: 0,
    username: "",
    name: "",
    email: "",
    profile_picture: "",
    profile_deskripsi: "",
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
                username: authpayload.user.username,
                name: authpayload.user.name,
                email: authpayload.user.email,
                profile_picture: authpayload.user.profile_picture,
                profile_deskripsi: authpayload.user.profile_deskripsi,
            }

            return user
        },
        AUTH_CHECK: (state, action) => {
            const us = action.payload
            SetAuthToken(localStorage.token)
            const user: User = {
                id: us.id,
                username: us.username,
                name: us.name,
                email: us.email,
                profile_picture: us.profile_picture,
                profile_deskripsi: us.profile_deskripsi,
            }

            return user
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem("token")
            return initialStateAuth

        },
        AUTH_ERROR: () => {
            localStorage.removeItem("token")
            return initialStateAuth

        }

    }
})