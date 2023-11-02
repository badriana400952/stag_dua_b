import "reflect-metadata"
import { DataSource } from "typeorm"
import { Follow } from "./entities/Follow"
import { User } from "./entities/User"
import { Threads } from "./entities/Thread"
import { Likes } from "./entities/Likes"
import { Reply } from "./entities/Reply"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "monorail.proxy.rlwy.net",
    port: 20482,
    username: "postgres",
    password: "efaB1D11B5gGdeG6*dAG11Be-CFdGF6a",
    database: "railway",
    synchronize: true,
    logging: true,
    // entities: ["src/entities/*.ts"],
    entities: [Follow, User, Threads, Likes, Reply],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
