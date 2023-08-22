import cloudinaryConfig from "../config/config";
import { AppDataSource } from "../data-source";
import * as amqp from "amqplib";
import "dotenv/config"
import ThreadWorker from "./ThreadWorker";

class WorkerHub{
    constructor(){
        AppDataSource.initialize()
        .then(async()=> {
            cloudinaryConfig()
            const connection = await amqp.connect("amqp://localhost");
            ThreadWorker.create("thread-queue", connection)
        })
        .catch((error) => console.log(error))
    }
}
export default new WorkerHub()