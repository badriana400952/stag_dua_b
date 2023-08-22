import { Request, Response } from "express";
import { createdThreadSchema } from "../utils/threads";
import {sendMessageToQueue} from "../libs/sendMessageToQueue"
class ThreadsQueue{
    async create(req: Request, res: Response) {

        try {
            const nameQueue = "thread-queue";
            const filename = res.locals.filename
            const data = {
                content: req.body.content,
                aut_img: filename,
            }


            const { error } = createdThreadSchema.validate(data);
            if (error) {
                return res.status(400).json({ error: error });
            }
            const loginSession = res.locals.loginSession
            const payload = {
                content : data.content,
                aut_img : data.aut_img,
                user_id : loginSession.user.id
            }

            const errorQueue = await sendMessageToQueue(nameQueue, payload);
            if (errorQueue) {
                return res.status(400).json({ error: errorQueue });
            }
            
            // const hehe = cloudinary.config({
            //     cloud_name: process.env.CLOUD_NAME,
            //     api_key: process.env.API_KEY,
            //     api_secret: process.env.API_SECRET
            // });

            // const clodResponse = await cloudinary.uploader.upload(
            //     "./uploads/" + filename
            // )
            // console.log("ini clodResponse", clodResponse)
            // if (error) {
            //     return res.status(400).json({ error: error });
            // }
            // console.log("INI ABGIAN AUTH IMAGE", data.aut_img)

            // const thread = this.threadRepository.create({
            //     aut_img: clodResponse.secure_url,
            //     content: data.content,
            //     user: {
            //         id: loginSession.user.id
            //     }

            // })

            // const createdThread = this.threadRepository.save(thread)
            return res.status(200).json({ massage: "data Thread berhasil ditambahkan", data: payload });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
export default new ThreadsQueue