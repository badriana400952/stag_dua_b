import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User";
import { Reply } from "./Reply";
import { Likes } from "./Likes";

// Definisi entitas Threads
@Entity({ name: "threads" })
export class Threads {

    // Kolom utama dengan tipe data primary key yang secara otomatis di-generate
    @PrimaryGeneratedColumn()
    id: number

    // Kolom yang menyimpan gambar thread (opsional, bisa null)
    @Column({ nullable: true })
    image: string;

    // Kolom yang menyimpan konten thread (wajib)
    @Column()
    content: string;

    // Kolom yang menyimpan tanggal posting thread (diisi otomatis dengan waktu saat ini)
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    posted_at: Date;

    // Kolom yang menyimpan jumlah likes untuk thread (opsional, bisa null)
    @Column({ nullable: true })
    like_counte: string;

    // Kolom yang menyimpan jumlah balasan untuk thread (opsional, bisa null)
    @Column({ nullable: true })
    replies_count: string;

    // Kolom yang menyatakan apakah thread telah di-liked (opsional, bisa null)
    @Column({ nullable: true })
    is_liked: boolean

    // Relasi Many-to-One dengan entitas User, setiap thread memiliki satu user pembuat
    @ManyToOne(() => User, (user) => user.threads, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    user: User;

    // Relasi One-to-Many dengan entitas Reply, setiap thread bisa memiliki banyak balasan
    @OneToMany(() => Reply, (replies) => replies.threads)
    replies: Reply[];

    // Relasi One-to-Many dengan entitas Likes, setiap thread bisa memiliki banyak likes
    @OneToMany(() => Likes, (likes) => likes.threads, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    likes: Likes[];


}
// Baris 4 - 16: Mendefinisikan entitas Threads dengan nama tabel "threads".
//     Baris 18 - 21: Menggunakan @PrimaryGeneratedColumn untuk menandai kolom id sebagai primary key yang di - generate secara otomatis.
//         Baris 24 - 27: Kolom aut_img untuk menyimpan URL gambar thread.nullable: true mengizinkan kolom ini bernilai null.
//             Baris 30 - 33: Kolom content untuk menyimpan konten(teks) dari thread.
//                 Baris 36 - 40: Kolom postd dengan tipe "timestamp" dan nilai default "CURRENT_TIMESTAMP" yang akan menyimpan tanggal posting thread.
//                     Baris 43 - 47: Kolom like_counte untuk menyimpan jumlah likes pada thread.nullable: true mengizinkan kolom ini bernilai null.
//                         Baris 50 - 54: Kolom replies_count untuk menyimpan jumlah balasan pada thread.nullable: true mengizinkan kolom ini bernilai null.
//                             Baris 57 - 61: Kolom is_liked untuk menyatakan apakah thread telah di - liked.nullable: true mengizinkan kolom ini bernilai null.
//                                 Baris 64 - 70: Relasi Many - to - One dengan entitas User.Setiap thread memiliki satu user pembuat.
//                                     Baris 73 - 78: Relasi One - to - Many dengan entitas Reply.Setiap thread bisa memiliki banyak balasan.
//                                         Baris 81 - 87: Relasi One - to - Many dengan entitas Likes.Setiap thread bisa memiliki banyak likes.
// Dengan struktur entitas ini, thread dalam aplikasi memiliki informasi seperti gambar, konten, tanggal posting, jumlah likes, jumlah balasan, status like, user pembuat, balasan, dan likes yang terkait dengannya.