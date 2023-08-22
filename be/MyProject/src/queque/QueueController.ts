import { Request, Response } from "express";
import * as amqp from "amqplib";
import { createdThreadSchema } from "../utils/threads";
class QueueController {
    async queue(req: Request, res: Response) {

        try {
            const nameQueue = "thread_queue";
            console.log("QueueController 1")
            const fileName = res.locals.fileName
            console.log("QueueController 2")
            // const data = {
            //     content: req.body.content,
            //     aut_img: fileName
            // }
            // console.log("QueueController 3")
            // const {error } = createdThreadSchema.validate(data);
            // if (error) {
            //     return res.status(400).json({ error: error });
            // }
            console.log("QueueController 4")
            const loginSession = res.locals.loginSession
            console.log("QueueController 5")
            const payload = {
                content: req.body.content,
                aut_img: fileName,
                userId : loginSession.user
                // userId : loginSession.user.id
            };
            console.log("QueueController 6")
            const connection = await amqp.connect("amqp://localhost");
            console.log("QueueController 7")
            const channel = await connection.createChannel();
            console.log("QueueController 8")
            await channel.assertQueue(nameQueue);
            console.log("QueueController 9")
            channel.sendToQueue(nameQueue, Buffer.from(JSON.stringify(payload)));
            await channel.close();
            await connection.close();
            console.log("QueueController 10")

            res.status(200).json({
                message: "thread is quired"
            })
            console.log("QueueController 11")
        } catch (error: any) {
            console.error("error massage quque", error);
            res.status(500).json({
                error: "terjadi kesalahan pada server",
            });
        }


    }
}
export default new QueueController();