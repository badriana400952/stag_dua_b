import { Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
const cloudinary = require("cloudinary").v2;
class UserService {
    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User);
    async find(req: Request, res: Response) {
        try {
            const user = await this.userRepository.find(

            );
            
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }



    // async find(reqQuery?: any, loginSession?: any): Promise<any> {
    //     try {
    //         const limit = parseInt(reqQuery.limit ?? 0); // Menggunakan req.params untuk mendapatkan parameter dari URL
    //         console.log("1");

    //         // Menggunakan this.repilesRepository adalah asumsi bahwa Anda sudah memiliki repilesRepository yang sesuai
    //         // Selain itu, pastikan bahwa relasi "user" dan "threads" sesuai dengan nama relasi yang ada pada entity Reply
    //         const follow = await this.userRepository.find({
    //             relations: ["follows","user"],
    //             order: {
    //                 id: "DESC",
    //             },
    //             take: limit,
    //         });
    //         console.table(follow)
    //         console.log(follow)
    //         return follow.map((element) => ({
    //             id: element.id,
    //             name: element.name,
    //             email: element.email,
    //             followers: element.followers,
    //             followings: element.followings,
    //             profile_deskripsi: element.profile_deskripsi,
    //             profile_picture: element.profile_picture,
    //             threads: element.threads,
    //             likes: element.likes,
    //         }));
    //         // console.table(follow)
    //         // console.log(follow)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    async findOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await this.userRepository.findOne({
                where: {
                    id: id
                }
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }
    async create(req: Request, res: Response) {
        try {
            const user = await this.userRepository.save(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const deletedUser = await this.userRepository.delete(id);
            return res.status(200).json(deletedUser);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }
    async update(req: Request, res: Response) {
        try {
            const filename = req.file.filename;
            // const data = req.body;
            const id = parseInt(req.params.id);
            // const loginSession = res.locals.loginSession;
            const {name, username, profile_deskripsi, profile_picture} = req.body
        
            const user = await this.userRepository.findOne({
              where: { 
                id: id 
            },
            });
        
            cloudinary.config({
              cloud_name: process.env.CLOUD_NAME,
              api_key: process.env.API_KEY,
              api_secret: process.env.API_SECRET,
            });
        
            const cloudinaryResponse = await cloudinary.uploader.upload(
              "./uploads/" + filename
            );
        
            user.name = name;
            user.username = username;
            user.profile_deskripsi = profile_deskripsi;
            user.profile_picture = cloudinaryResponse.url;
        
            const anu = await this.userRepository.save(user);
        
            return res.status(200).json(anu);
           } catch (error) {
            return res.status(500).json({ error: error });
           }
          }
        
        
}
export default new UserService