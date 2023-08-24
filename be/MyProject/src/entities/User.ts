import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Threads } from "./Thread";
import { Likes } from "./Likes";
import { Reply } from "./Reply";

// Definisi entitas User
@Entity({ name: "user" })
export class User {

    // Kolom utama dengan tipe data primary key yang di-generate secara otomatis
    @PrimaryGeneratedColumn()
    id: number

    // Kolom yang menyimpan username pengguna (wajib)
    @Column()
    name:string;
    
    // Kolom yang menyimpan nama lengkap pengguna (wajib)
    @Column()
    username: string;

    // Kolom yang menyimpan alamat email pengguna (wajib)
    @Column()
    email: string;

    // Kolom yang menyimpan password pengguna (wajib)
    @Column({ select: true })
    password: string;

    // Kolom yang menyimpan URL foto profil pengguna (opsional, bisa null)
    @Column({ nullable: true })
    profile_picture: string;

    // Kolom yang menyimpan deskripsi profil pengguna (opsional, bisa null)
    @Column({ nullable: true })
    profile_deskripsi: string;

    // Relasi One-to-Many dengan entitas Threads, setiap user bisa memiliki banyak threads
    @OneToMany(() => Threads, (threads) => threads.user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    threads: Threads[];

    // Relasi One-to-Many dengan entitas Likes, setiap user bisa memiliki banyak likes
    @OneToMany(() => Likes, (likes) => likes.user)
    likes: Likes[];

    // Relasi One-to-Many dengan entitas Reply, setiap user bisa memiliki banyak balasan
    @OneToMany(() => Reply, (replies) => replies.user)
    replies: Reply[];
}
// Baris 4-15: Mendefinisikan entitas User dengan nama tabel "user".
// Baris 17-21: Menggunakan @PrimaryGeneratedColumn untuk menandai kolom id sebagai primary key yang di-generate secara otomatis.
// Baris 24-28: Kolom user_name untuk menyimpan username pengguna.
// Baris 31-35: Kolom user_fullName untuk menyimpan nama lengkap pengguna.
// Baris 38-42: Kolom email untuk menyimpan alamat email pengguna.
// Baris 45-49: Kolom password untuk menyimpan password pengguna. select: true memungkinkan kolom ini diambil saat query.
// Baris 52-56: Kolom profile_foto untuk menyimpan URL foto profil pengguna. nullable: true mengizinkan kolom ini bernilai null.
// Baris 59-63: Kolom profile_desk untuk menyimpan deskripsi profil pengguna. nullable: true mengizinkan kolom ini bernilai null.
// Baris 66-76: Relasi One-to-Many dengan entitas Threads. Setiap user bisa memiliki banyak threads. onDelete dan onUpdate digunakan untuk mengatur aksi saat data terkait dihapus atau diperbarui.
// Baris 78-83: Relasi One-to-Many dengan entitas Likes. Setiap user bisa memiliki banyak likes.
// Baris 85-90: Relasi One-to-Many dengan entitas Reply. Setiap user bisa memiliki banyak balasan.
// Dengan struktur entitas ini, setiap pengguna dalam aplikasi memiliki informasi seperti username, nama lengkap, alamat email, password, foto profil, deskripsi profil, thread yang dibuat, likes yang diberikan, dan balasan yang ditulis.






