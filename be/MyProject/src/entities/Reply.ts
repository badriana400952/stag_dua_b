import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"
import { Threads } from "./Thread"

@Entity({ name: "replies" })
export class Reply {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    comment: string

    // @ManyToOne(() => Threads, thread => thread.replies) // Contoh, sesuaikan dengan nama entity Thread dan field relasinya
    // @JoinColumn({ name: "threadId" })
    // thread: Threads;

    @ManyToOne(() => User, (user) => user.replies)
    user: User

    @ManyToOne(() => Threads, (thread) => thread.likes)
    threads: Threads
}