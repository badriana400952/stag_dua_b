import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"
import { User } from "./User"
import { Threads } from "./Thread"

// Definisi entitas Likes
@Entity({ name: "likes" })
export class Likes {

    // Kolom utama dengan tipe data primary key yang di-generate secara otomatis
    @PrimaryGeneratedColumn()
    id: number

    // Kolom yang menyatakan apakah suka (like) atau tidak (default: false)
    // @Column('boolean', { default: false })
    // isLike: boolean = false;

    // Relasi Many-to-One dengan entitas User, setiap like terkait dengan satu user
    @ManyToOne(() => User, (user) => user.likes,{
        onDelete: 'CASCADE',
        onUpdate : 'CASCADE',
    })
    user: User

    // Relasi Many-to-One dengan entitas Threads, setiap like terkait dengan satu thread
    @ManyToOne(() => Threads, (thread) => thread.likes,{
        onDelete: 'CASCADE',
        onUpdate : 'CASCADE',
    })
    threads: Threads

    // Baris 4-12: Mendefinisikan entitas Likes dengan nama tabel "likes".
    // Baris 14-18: Menggunakan @PrimaryGeneratedColumn untuk menandai kolom id sebagai primary key yang di-generate secara otomatis.
    // Baris 21-25: Kolom isLike dengan tipe data boolean, yang memiliki nilai default false. Kolom ini akan menunjukkan apakah suatu like (suka) telah diberikan atau tidak.
    // Baris 28-33: Relasi Many-to-One dengan entitas User. Setiap like terkait dengan satu user yang memberikan like.
    // Baris 36-41: Relasi Many-to-One dengan entitas Threads. Setiap like terkait dengan satu thread yang menerima like.
    // Dengan struktur entitas ini, setiap like dalam aplikasi memiliki informasi apakah like telah diberikan atau belum, user yang memberikan like, dan thread yang menerima like.
}
