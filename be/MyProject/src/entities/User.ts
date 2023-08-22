import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Threads } from "./Thread";
import { Likes } from "./Likes";
import { Reply } from "./Reply";

@Entity({ name: "user"})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_name: string;
    
    @Column()
    user_fullName: string;

    @Column()
    email: string;

    @Column({select: true})
    password: string;

    @Column({nullable: true})
    profile_foto: string;

    @Column({nullable: true})
    profile_desk: string;

    @OneToMany(() => Threads, (threads) => threads.user, {
        onDelete :'CASCADE',
        onUpdate: 'CASCADE'
    })
    // threads: Threads[];
    
    @OneToMany(() => Threads, (threads)=> threads.user)
    @OneToMany(() => Likes, (likes)=> likes.user)
    @OneToMany(() => Reply, (replies)=> replies.user)
    
    
    // kalau dia ubah manual id di user maka otomatis di table relation ke ikut ubah juga
    //contoh di thread klw di id user ubah id nya manual maka di thread natni iduser keubah juga otomatis
    // @OneToMany(() => Threads, (threads)=> threads.user, {
    //     onUpdate : "CASCADE"
    // }) 

    // kalau mau hapus user klw terhubung/relasi ke table lain
    // @OneToMany(() => Threads, (threads)=> threads.user , {
    //     onDelete:"CASCADE"
    // }) 

    threads: Threads[];
    likes: Likes[];
    replies: Reply[];

}
