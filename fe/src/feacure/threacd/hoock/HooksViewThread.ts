import React from 'react'

import { useEffect, useState } from 'react';
import { ApiData } from '../../../lib/Api';
import { Thread } from '../../../interface/Thread';



import { useNavigate } from "react-router-dom"
// import { ChangeEvent } from 'react';




interface ThreadStatus {
    content: string,
    aut_img: File | null;
}
export const HooksViewThread = () => {

    // GET LOGIC
    const [showImage, setShowImage] = useState<boolean>(true)
    const [datas, setDatas] = useState<Thread[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [like, setLike] = useState(0);
    const [isLike, setIslike] = useState(false);
    // 
    const dataStatus = async () => {
        try {
            const response = await ApiData.get("/thread", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })

            
            setDatas(response.data)
            console.log('ini data', response.data)
            setIsLoading(false);
        } catch (error) {
            // setError(error);
            setIsLoading(false);
        }


    } 
    useEffect(() => {
        dataStatus()

    }, [])
        console.log('ini datas datas datas datas', datas)

    // POST LOGIC
    const [thread, setThread] = useState<ThreadStatus>({
        content: "",
        aut_img: null,

    })
    const navigate = useNavigate()



    const handleinpit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThread({
            ...thread, content: e.target.value
        })
    }
    const hendleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThread((prevContent) => ({
                ...prevContent,
                aut_img: file
            }))
        }
    }


    const HandleKirim = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const fromdata = new FormData()
            fromdata.append('content', thread.content)
            fromdata.append('aut_img', thread.aut_img as File)

            const response = await ApiData.post(`/thread/created`, fromdata);
            console.log("Data yang p dikirim:", fromdata);

            console.log("kirim data logic Dhasboard ", response);
           
            navigate('/')
            dataStatus();
            // setThread({fromdata: ""})
        } catch (error) {
            console.log(error);
        }

    };


    return { HandleKirim,thread, handleinpit, hendleFile, showImage, setShowImage, datas, isLoading, like, setLike, isLike, setIslike }
}
