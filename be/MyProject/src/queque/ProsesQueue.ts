// const cloudinary = require('cloudinary').v2
// import * as amqp from "amqplib"
// import { AppDataSource } from "../data-source";
// import { Threads } from "../entities/Thread";
// async function ProsesQueue() {
//     const nameQueue = "thread-queue";
//     cloudinary.config({
//         cloud_name: process.env.CLOUD_NAME,
//         api_key: process.env.API_KEY,
//         api_secret: process.env.API_SECRET
//     });
//     try {
//         const connection = await amqp.connect("amqp://localhost");
//         const channel = await connection.createChannel()
//         await channel.assertQueue(nameQueue)
//         console.log("ProsesQueue 1")
//         await channel.consume(nameQueue, async (message) => {
//             if(message !== null){
//              try {
//                 const payload = JSON.parse(message.content.toString())
//                 console.log("Received message", payload)
//             console.log("ProsesQueue 2")

//                 console.log("hhh")
//                 const cloudinaryResponse = await cloudinary.uploader.upload("./uploads/" + payload.aut_img);
//                 console.log("hhhdd")
//                 console.log("ProsesQueue 3")
//                 AppDataSource.initialize().then(async () => {
//                     const thread  = AppDataSource.getRepository(Threads).create({
//                         content : payload.content,
//                         aut_img : cloudinaryResponse.secure_url,
//                         user:payload.user
//                         // user : {
//                         //     id : payload.user
//                         // }
//                     })
//                     console.log("ProsesQueue 4")
//                     const createdThread = await AppDataSource.getRepository(Threads).save(thread)
//                     this.emitter.emit("thread", createdThread)
//                     console.log("ProsesQueue 5")
//                     console.log("ini createdThread", createdThread)
//                 }).catch(error => console.log(error))
                
//                 // const thread  = AppDataSource.getRepository(Threads).create({
//                 //     content : payload.content,
//                 //     aut_img : cloudinaryResponse.secure_url,
//                 //     user : {
//                 //         id : payload.user
//                 //     }
//                 // })
//                 // const createdThread = await AppDataSource.getRepository(Threads).save(thread)
//                 // this.emitter.emit("thread", createdThread)

//                 // console.log("ini createdThread", createdThread)
//                 channel.ack(message)
//                 console.log("ProsesQueue 6")
//             } catch (error) {
//                 console.log("ini error process queue", error)
//              }   
//             }
//         })
//     } catch (error) {
        
//     }
// }
// ProsesQueue()