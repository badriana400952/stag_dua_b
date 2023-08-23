import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"
import { Threads } from "./Thread"

// Definisi entitas Reply
@Entity({ name: "replies" })
export class Reply {

    // Kolom utama dengan tipe data primary key yang di-generate secara otomatis
    @PrimaryGeneratedColumn()
    id: number

    // Kolom yang menyimpan isi balasan (comment) (opsional, bisa null)
    @Column({ nullable: true })
    comment: string

    // Relasi Many-to-One dengan entitas User, setiap reply memiliki satu user pengirim
    @ManyToOne(() => User, (user) => user.replies)
    user: User

    // Relasi Many-to-One dengan entitas Threads, setiap reply terkait dengan satu thread
    @ManyToOne(() => Threads, (thread) => thread.likes)
    threads: Threads

    // Baris 4-13: Mendefinisikan entitas Reply dengan nama tabel "replies".
    // Baris 15-19: Menggunakan @PrimaryGeneratedColumn untuk menandai kolom id sebagai primary key yang di-generate secara otomatis.
    // Baris 22-26: Kolom comment untuk menyimpan isi balasan (comment) dari pengguna. nullable: true mengizinkan kolom ini bernilai null.
    // Baris 29-34: Relasi Many-to-One dengan entitas User. Setiap reply terkait dengan satu user pengirim.
    // Baris 37-42: Relasi Many-to-One dengan entitas Threads. Setiap reply terkait dengan satu thread.
    // Dengan struktur entitas ini, setiap balasan (reply) dalam aplikasi memiliki informasi seperti isi balasan, pengguna pengirim, dan thread yang menjadi subjek dari balasan tersebut.
}
