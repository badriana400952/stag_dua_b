
export interface User {
    id: number,
    username?: string,
    name?: string,
    email?: string,
    profile_picture?: string,
    profile_deskripsi: string
}
// export interface UserStatus {

//     content?: string,
//     image?:  Blob | MediaSource
// }
export interface RegisUser {
    name: string,
    username: string,
    password: string,
    email: string,
}

export interface LoginUser {
    password: string,
    email: string,
}



export interface Thread {
    id?: number,
    user?: User,
    image?: string,
    posted_at?: Date,
    content?: string,
    likes_count?: number,
    replies_count?: number,
    is_liked?: boolean,
}


export interface ThreadStatus {
    content?: string,
    image?:string
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
  