// import { Repository } from "typeorm";
// import { AppDataSource } from "../data-source";
// import { Reply } from "../entities/Reply";
// import { Threads } from "../entities/Thread";
// import { Request, Response } from "express";
// import { createdThreadSchema } from "../utils/threads";

// class ReplyService {
//     private readonly replyRepository: Repository<Reply> =
//         AppDataSource.getRepository(Reply);
//     private readonly threadRepository: Repository<Threads> =
//         AppDataSource.getRepository(Threads);


//     async find(req: Request, res: Response) {
//         try {

//             const replies = await this.replyRepository.find({
//                 relations: ["user", "threads"],
//                 order: {
//                     id: "DESC",
//                 },
//             });
//             return res.status(200).json(replies);
//         } catch (err) {
//             return res.status(500).json("Terjadi kesalahan pada server");
//         }
//     }


//     async findOne(req: Request, res: Response) {
//         try {
//             const threadId = parseInt(req.query.threadId as string);

//             // Assuming you have relationships named "user" and "threads" in your Reply entity
//             const replies = await this.replyRepository.find({
//                 where: {
//                     threads: { id: threadId }, // Assuming your relationship field name is "threads"
//                 },
//                 order: {
//                     id: "ASC",
//                 },
//                 relations: ["user", "threads"], // Ensure correct relation names
//             });

//             return res.status(200).json(replies);
//         } catch (error) {
//             console.error("Error:", error);
//             return res.status(500).json({ error: "Terjadi kesalahan pada server" });
//         }
//     }





//     async create(req: Request, res: Response) {
//         try {
//             const idThread = parseInt(req.params.idThread)
//             const data = req.body;
//             const loginSession = res.locals.loginSession
//             const { error, value } = createdThreadSchema.validate(data);
//             console.log("masuk sini ga 1")
//             if (error) {
//                 return res.status(400).json({ error: error });
//             }

//             if (isNaN(idThread)) {
//                 return res.status(400).json({ error: 'Invalid thread ID' });
//             }


//             const thread = await this.threadRepository.findOne({
//                 where: {
//                     id: idThread,
//                 },
//             });
//             if (!thread) {
//                 return res.status(404).json({ error: 'Thread not found' });
//             }

//             console.log("masuk sini ga 2")
//             console.log(loginSession)

//             const newReply = this.replyRepository.create({
//                 comment: value.comment,
//                 user: {
//                     id: loginSession.user.id,
//                 },
//                 threads: thread, // Set the relationship to the thread
//             });

//             console.log("masuk siniga 3")
//             const createdReply = await this.replyRepository.save(newReply);
//             return res.status(200).json(createdReply);

//         } catch (error) {
//             return res.status(500).json(error);
//         }
//     }
// }
// export default new ReplyService();



// async find(reqQuery: any): Promise<any> {
//     try {
//         const threadId = parseInt(reqQuery.thread_id ?? 0); // Menggunakan req.params untuk mendapatkan parameter dari URL
//         console.log("1");

//         // Menggunakan this.repilesRepository adalah asumsi bahwa Anda sudah memiliki repilesRepository yang sesuai
//         // Selain itu, pastikan bahwa relasi "user" dan "threads" sesuai dengan nama relasi yang ada pada entity Reply
//         const replies = await this.repilesRepository.find({
//             relations: ["user"],
            
//             where: {
//                 threads: { id: threadId },
//             },
//             order: {
//                 id: "DESC",
//             },
//         });

//         console.log("111");
//         // return res.status(200).json(replies);
//         return  replies 
//     } catch (error) {
//         console.error("Error:", error);

//    }
// }
                                                                                                                                