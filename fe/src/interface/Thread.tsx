
export interface User {
    id?: number,
    email?: string,
    name: string,
    username: string,
    profile_deskripsi: string,
    profile_picture: File | Blob | MediaSource | string;
}

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
    id: number,
    user?: User,
    image?: string,
    posted_at?: Date,
    content?: string,
    likes_count: number,
    replies_count?: number,
    is_liked: boolean,
}

export interface ProfilThread {
    id: number,
    user?: User,
    image?: string,
    posted_at?: Date,
    content?: string,
    likes_count: number,
    replies_count?: number,
    is_liked: boolean,
}
export interface ThreadStatus {
    content: string,
    image: File | null;
}


export interface ThreadComment {
    comment?: string,
    thread_id?: number;
    // user? : User
    // thread? : Thread
}


export interface threadState {
    thread: Thread[];
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

export interface IFollow{
    id: number;
    user_id: number;
    username: string;
    name: string;
    email: string;
    profile_picture?: string,
    profile_deskripsi: string
    is_followed: boolean;
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
  