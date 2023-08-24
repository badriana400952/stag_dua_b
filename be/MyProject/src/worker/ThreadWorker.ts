// import { EventEmitter } from "stream"
import * as amqp from "amqplib"
// import {v2 as cloudinary } from "cloudinary"
import "dotenv/config"
import { AppDataSource } from "../data-source"
import { Threads } from "../entities/Thread"
// import { v2 as cloudinary } from "cloudinary"
const cloudinary = require('cloudinary').v2
import { EventEmitter } from "stream"
import cloudinaryConfig from "../config/config"
class ThreadWorker {
    // public emitter = new EventEmitter()
    async create(queueName: string, connection: amqp.Connection) {

        // cloudinaryConfig()
        try {

            const channel = await connection.createChannel()

            await channel.assertQueue(queueName)
            await channel.consume(queueName, async (message) => {
                console.log("ini message", message)
                if (message !== null) {
                    try {
                        const payload = JSON.parse(message.content.toString())

                        console.log("Received message", payload)
                        const cloudinaryResponse = await cloudinary.uploader.upload(
                            "./uploads/" + payload.image
                        );
                        console.log("hhhdd", cloudinaryResponse)

                        const thread = AppDataSource.getRepository(Threads).create({
                            content: payload.content,
                            image: cloudinaryResponse.secure_url,
                             user: {
                                id: payload.user_id
                             }

                        })
                        console.log("hhhdd")

                        const createdThread = await AppDataSource.getRepository(Threads).save(thread)
                        // this.emitter.emit("thread", createdThread)

                        console.log("ini createdThread", createdThread)
                        console.log("ini created")

                        channel.ack(message)
                    } catch (error) {
                        console.log("ini error process queue", error)
                    }
                }
            })
        } catch (error) {
            console.log("ini error process queue", error)

        }

    }
}

export default new ThreadWorker
