import React from 'react'

import { useEffect, useState } from 'react';
import { ApiData } from '../../../lib/Api';
import { Thread } from '../../../interface/Thread';
import { useDispatch } from 'react-redux';
import { LIKE, SET_THREAD } from '../../../store/rootReduc';




// import { useNavigate } from "react-router-dom"
// import { ChangeEvent } from 'react';




interface ThreadStatus {
    content: string,
    image: File | null;
}
export const HooksViewThread = () => {

    // GET LOGIC
    const [showImage, setShowImage] = useState<boolean>(true)
    const [datas, setDatas] = useState<Thread[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispath = useDispatch()
    // 
    const dataStatus = async () => {
        try {
            const response = await ApiData.get("/thread", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            setDatas(response.data)
            dispath(SET_THREAD({
                threads: response.data
            })) 
            setIsLoading(false);
        } catch (error) {
            // setError(error);
            setIsLoading(false);
        }


    }
    useEffect(() => {
        dataStatus()

    }, [])

    // POST LOGIC
    const [thread, setThread] = useState<ThreadStatus>({
        content: "",
        image: null,

    })
    // const navigate = useNavigate()

    // console.log("idni", datas)

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
                image: file
            }))
        }
    }

    // const thredss = useSelector((state: RootState) => state.thread.threads)

    const HandleKirim = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const fromdata = new FormData()
            fromdata.append('content', thread.content)
            fromdata.append('image', thread.image as File)
            const response = await ApiData.post(`/thread/created`, fromdata);
            // console.log("kirim data logic Dhasboard ", response);
            // navigate('/')
            if (response.data) {
                setTimeout(async () => {
                    await dataStatus();
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }

    }
    // const [likes_count, setIikes_count] = useState(0);
    // const [is_liked, setIs_liked] = useState(false);
    async function handleLikes(id: number, is_liked: boolean) {
        
        try {
            if (!is_liked) {
                 await ApiData.post("/like", { thread_id: id })
                // console.log('ini data', response.data)
                dispath(LIKE({ id: id, isLiked: is_liked }));
                // setIs_liked(true)
            } else {
                 await ApiData.delete(`/like/${id}`)
                // console.log('ini data', response.data)
                // setIs_liked(false)
                // setIikes_count(likes_count - 1);

            }  

           dataStatus()
        } catch (error) {
            console.log(error)

        }
        // console.log('ini datalikes_countlikes_countlikes_countlikes_count', likes_count)

    }


    return { handleLikes, HandleKirim, thread, handleinpit, hendleFile, showImage, setShowImage, datas, isLoading }
}
