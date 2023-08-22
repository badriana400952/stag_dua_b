import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Like, OneToMany } from "typeorm"
import { User } from "./User";
import { Reply } from "./Reply";
import { Likes } from "./Likes";

@Entity({ name: "threads" })
export class Threads {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    aut_img: string;

    @Column()
    content: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    postd: Date;

    
    @Column({ nullable: true })
    like_counte: string;

    
    @Column({ nullable: true })
    replies_count: string;

    
    @Column({ nullable: true })
    is_liked: boolean
    @ManyToOne(() => User, (user) => user.threads, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    user: User;


    @OneToMany(() => Reply, (replies) => replies.threads)
    replies: Reply[];

    @OneToMany(() => Likes, (likes) => likes.threads, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    likes: Likes[];
}
