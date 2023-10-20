import { useNavigate, useParams } from 'react-router-dom';
import { Thread, ThreadComment, User } from '../../../interface/Thread';
import { ApiData } from '../../../lib/Api';
import { useEffect, useState } from 'react';

export const HooksDetailThread = () => {
    const { id } = useParams()
    console.log(id)
    const [datas, setDatas] = useState<Thread[]>([]);
    const [like, setLike] = useState(0);
    const [isLike, setIslike] = useState(false);
    const [showImage, setShowImage] = useState<boolean>(true)

    const dataStatus = async () => {
        try {
            const response = await ApiData.get("/thread")
            setDatas(response.data)
            console.log('ini data', response.data)
        } catch (error) {
            console.log('ini data', error)

        }

    }


    useEffect(() => {
        dataStatus();
    }, []);
    const detail = datas.find((data) => data.id === Number(id))

    console.log('ini data', datas)
    const handleClick = () => {
        if (isLike) {
            setLike(like - 1)
        } else {
            setLike(like + 1)

        }
        setIslike(!isLike)
    }


    interface ComentarReply {
        id: number;
        comment: string;
        user: User
        thread: Thread
    }
    const [dataComentar, setDataComentar] = useState<ComentarReply[]>([])

    const Comentar = async () => {
        try {
            const responseDatas = await ApiData.get(`/replys/?thread_id=${id}`)
            setDataComentar(responseDatas.data)
            // console.log("setDataComentar", responseDatas.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Comentar()
    }, [])
    // console.log("dataComentar dataComentar dataComentar", dataComentar)

    const [comment, setComment] = useState<ThreadComment>({
        comment: "",
        thread_id: Number(id),
    })
    const navigate = useNavigate()
    const handleKirim = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await ApiData.post(`/reply`, comment)
            console.log(response.data)
            navigate(`/detail/${id}`)
            Comentar()
            setComment({ comment: "", })
        } catch (error) {
            console.log(error)

        }
    }
    // console.log("ini comment", comment)
    return {
        dataComentar,
        handleClick,
        handleKirim,
        comment,
        setComment,
        detail,
        showImage,
        setShowImage,
        isLike,
        like
        }
}

