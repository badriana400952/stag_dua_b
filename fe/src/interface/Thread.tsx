
export interface User {
    id: number,
    user_fullName?: string,
    user_name?: string,
    email?: string,
    profile_foto?: string,
    profile_desk: string
}
// export interface UserStatus {

//     content?: string,
//     aut_img?:  Blob | MediaSource
// }
export interface RegisUser {
    user_name: string,
    user_fullName: string,
    password: string,
    email: string,
}

export interface LoginUser {
    password: string,
    email: string,
}



export interface Thread {
    id: number,
    user?: User,
    aut_img?: string,
    postd?: string,
    content?: string,
    likes?: number,
    replies?: number,
    replies_count?: number,
    is_like?: boolean,
}


export interface ThreadStatus {
    content?: string,
    aut_img?:string
}
export interface ThreadComment {
    comment?: string,
    thread_id?: number;
    // user? : User
    // thread? : Thread
}


export interface threadState {
    dataThread: Thread[];
    loading: boolean;
    error: string | null;
}
export interface UserLoginState {
    auth: User[];
    loading: boolean;
    error: string | null
}

export interface threadStatepost {
    ThreadStatus: ThreadStatus[];
    thread: Thread[];
    // error: string | null;
}





// interface Kendaraan {
//     jenis: string;
//     roda: number;
//     warna?: string; // Properti opsional
//   }
  
//   function deskripsiKendaraan(kendaraan: Kendaraan): string {
//     return `Ini adalah ${kendaraan.warna || 'tidak ada'} ${kendaraan.jenis} dengan ${kendaraan.roda} roda.`;
//   }
  
//   const mobil: Kendaraan = { jenis: 'mobil', roda: 4, warna: 'merah' };
//   console.log(deskripsiKendaraan(mobil)); // Output: Ini adalah merah mobil dengan 4 roda.
  