
import { ChangeEvent, useState } from 'react';
import { ApiData, } from '../../../lib/Api';
import { User } from '../../../interface/Thread';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/types/rootState';
import {AUTH_CHECK } from '../../../store/rootReduc';
// import { Thread, User } from '../../../interface/Thread';
// import { useDispatch } from 'react-redux';
// import { LIKE, SET_THREAD } from '../../../store/rootReduc';




// import { useNavigate } from "react-router-dom"
// import { ChangeEvent } from 'react';




// interface ThreadStatus {
//     content: string,
//     image: File | null;
// }
export const HookEditData = () => {
    const {id} = useParams()




    // const [profile, setProfile] = useState<User>(); // Tipe data profile diubah menjadi User | null

    // const profilData = async () => {
    //     try {
    //         SetAuthToken(localStorage.token);
    //         const response = await ApiData.get(`/user/${id}`);
    //         setProfile(response.data);
    //         // console.log("Berhasil mendapatkan profil:", response);
    //       } catch (error) {
    //         console.log(error);
    //       }
    // }
    // useEffect(() => {
    //     profilData()
    // }, [])

    
    
    const dispatch = useDispatch()
    const profile = useSelector((state: RootState) => state.auth)
    
    console.log('profile', profile)

    const [forms, setForms] = useState<User>({
        name: "",
        username: "",
        profile_deskripsi: "",
        profile_picture: "",
    });
    const  navigate = useNavigate();
    const HandleKirim = async (e: React.FormEvent) => {
        e.preventDefault();

    

        try {
            const fromdata = new FormData()
            fromdata.append('name', forms.name);
            fromdata.append('username', forms.username);
            fromdata.append('profile_deskripsi', forms.profile_deskripsi);
            fromdata.append('profile_picture', forms.profile_picture as File);
            console.log("fromdata", fromdata);
            const response = await ApiData.patch(`/user/update/${id}`, fromdata);
            console.log("editData ", response.data);

            navigate('/')
            dispatch(AUTH_CHECK(response.data))
        } catch (error) {   
            console.log(error);
        }

    }

    const handleInput = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setForms({
          ...forms,
          [name]: value,
        });
    }

    const hendleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target

    if (files) {
      setForms({...forms,[name]: files[0]})
    } else {
      setForms({...forms,[name]: value})
    }
    }
   


    return { HandleKirim, handleInput, hendleFile, profile}
}
