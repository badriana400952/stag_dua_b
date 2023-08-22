import {  useNavigate } from "react-router-dom";
import { useState } from "react";
// import { ApiData } from "../../lib/Api";
// import axios from "axios";
import { LoginUser } from "../../interface/Thread";
// import { SetAuthToken } from "../../lib/Api";
// import { useAppDispatch, useAppSelector } from "../../redux/hoock";
// import { loginUser } from "../../redux/LoginSlice";
import { useDispatch } from "react-redux";
import { ApiData } from "../../lib/Api";
import { AUTH_lOGIN } from "../../store/rootReduc";
// import { UserLogins } from "../../redux/LoginSlice";




export function LoginLogic(){

    const [dataUser, setDataUser] = useState<LoginUser>({
        email : "",
        password : ""
    })
    const dispatch = useDispatch()
    // const { loading, error } = useAppSelector((state) => state.logins )
    const navigate = useNavigate()
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
           const response = await ApiData.post(`/login`, dataUser)
           console.log("berhasil", response)
           dispatch(AUTH_lOGIN(response.data))
            // const response = await dispatch(loginUser(dataUser))
            // dispatch({ type: 'LOGIN', payload: dataUser});
            // console.log("Data yang akan dikirim:", dataUser);
            // const response = await ApiData.post(`http://localhost:5000/api/login`, dataUser)
            // console.log("berhasil", response)
            // const rdt = response.data.token
            // localStorage.setItem("token", rdt)
            // SetAuthToken(localStorage.token)
            // console.log(response)
            navigate('/')
        } catch (error) {
            console.log("gagal", error)
        }
    
    }
    
    return {handleLogin,setDataUser,dataUser}
    
    
    
    
}
