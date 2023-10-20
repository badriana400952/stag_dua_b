import axios from 'axios'

export const ApiData = axios.create({
    baseURL: "http://localhost:8000/api",
}) 
export const SetAuthToken = (token: string) => {
    if(token) {
        ApiData.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete ApiData.defaults.headers.common["Authorization"]
    }
}