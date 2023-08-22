import { Repository } from "typeorm";
import { Threads } from "../entities/Thread";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createdThreadSchema, updatedThreadSchema } from "../utils/threads";

// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2
class ThreadService {

    private readonly threadRepository: Repository<Threads> = AppDataSource.getRepository(Threads)



    // async find(req: Request, res: Response) {
    //     try {
    //         const threads = await this.threadRepository.find({ 
    //             relations: ["user", "replies", "likes"],
    //             order: {
    //                 id: "DESC",
    //             },
    //          });

    //         return res.status(200).json(threads);
    //     } catch (err) {
    //         return res.status(500).json("Terjadi kesalahan pada server");
    //     }

    // }
    async find(reqQuery?: any, loginSession?: any): Promise<any> {
        try {
            const limit = parseInt(reqQuery.limit ?? 0); // Menggunakan req.params untuk mendapatkan parameter dari URL
            console.log("1");

            // Menggunakan this.repilesRepository adalah asumsi bahwa Anda sudah memiliki repilesRepository yang sesuai
            // Selain itu, pastikan bahwa relasi "user" dan "threads" sesuai dengan nama relasi yang ada pada entity Reply
            const threads = await this.threadRepository.find({
                relations: ["user", "likes.user", "replies"],
                order: {
                    id: "DESC",
                },
                take: limit,
            });

            return threads.map((element) => ({
                id: element.id,
                content: element.content,
                aut_img: element.aut_img,
                postd: element.postd,
                user: element.user,
                replies_count: element.replies.length,
                likes_count: element.likes.length,
                is_liked: element.likes.some(
                    (like: any) => like.user.id === loginSession.user.id
                ),
            }));
        } catch (error) {
            console.error("Error:", error);

        }
    }

    // cara lama
    // async findOne(req: Request, res: Response) {
    //     try {
    //         console.log("masuk 1");
    //         const id = parseInt(req.params.id);
    //         console.log("masuk 2");

    //         const thread = await this.threadRepository.findOne({
    //             where: {
    //                 id: id
    //             },
    //             relations: ["user", "replies", "likes"]
    //         });

    //         console.log("masuk 3");
    //         console.log("ini id", id);
    //         return res.status(200).json(thread);
    //     } catch (error) {
    //         console.error(error); // Log the error for debugging purposes
    //         return res.status(500).json("An error occurred.");
    //     }
    // }
    // cara mas surya
    // async findOne(id : number, loginSession?: any):Promise<any> {
    //     try {


    //         const thread = await this.threadRepository.findOne({
    //             where: {
    //                 id: id,
    //             },
    //             relations: ["user", "replies", "likes"]
    //         });

    //         return {
    //             id: thread.id,
    //             content: thread.content,
    //             aut_img: thread.aut_img,
    //             postd: thread.postd,
    //             user: thread.user,
    //             replies: thread.replies,
    //             likes: thread.likes,
    //             is_liked: thread.likes.some(
    //                 (like:any) => like.userId === loginSession.user.id
    //             ),

    //         }
    //     } catch (error) {
    //         console.error(error); // Log the error for debugging purposes
    //         throw new Error("An error occurred thread service baru.");
    //     }
    // }
    // cara mas surya tutup

    async findOne(req: Request, res: Response) {
        try {
            console.log("masuk 1")
            const id = parseInt(req.params.id)
            console.log("masuk 2")

            const threads = await this.threadRepository.findOne({
                where: {
                    id: id
                },

                relations: ["user", "replies", "likes "]
            })
            console.log("masuk 3")

            console.log("ini id")
            return res.status(200).json(threads);
            console.log("masuk 4")

        } catch (error) {
            return res.status(500).json("errorr bre ");

        }

    }

    async create(req: Request, res: Response) {
        console.log("INI ABGIAN AWAL")

        try {
            console.log("INI ABGIAN AWAL 2")

            const filename = res.locals.filename
            const data = {
                content: req.body.content,
                aut_img: filename,

            }
            // const data = req.body;
            console.log("INI ABGIAN AWAL 3")

            const loginSession = res.locals.loginSession
            console.log("INI ABGIAN AWAL 5")

            const { error, value } = createdThreadSchema.validate(data);
            console.log("INI ABGIAN AWAL 5")

            const hehe = cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET
            });
            console.log("hehe", hehe)

            const clodResponse = await cloudinary.uploader.upload(
                "./uploads/" + filename
            )
            console.log("ini clodResponse", clodResponse)
            if (error) {
                return res.status(400).json({ error: error });
            }
            console.log("INI ABGIAN AUTH IMAGE", data.aut_img)

            const thread = this.threadRepository.create({
                aut_img: clodResponse.secure_url,
                content: data.content,
                user: {
                    id: loginSession.user.id
                }

            })

            const createdThread = this.threadRepository.save(thread)
            return res.status(200).json({ massage: "data berhasil ditambahkan", thread });
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const deletedThread = await this.threadRepository.delete(id);
            return res.status(200).json(deletedThread);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }


    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)


            const threadz = await this.threadRepository.findOne({
                where: {
                    id: id
                }
            })
            const data = req.body;
            // console.log(id , threadz)
            // console.log(req.body)
            const { error, value } = updatedThreadSchema.validate(data);
            if (error) {
                return res.status(400).json({ error: error });
            }


            if (data.content != "") {
                threadz.aut_img = data.aut_img
            }
            if (data.content != "") {
                threadz.content = data.content
            }


            // console.log(threadz.content , threadz.image)

            const updatedThread = this.threadRepository.save(threadz)

            return res.status(200).json(updatedThread);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }

}



export default new ThreadService