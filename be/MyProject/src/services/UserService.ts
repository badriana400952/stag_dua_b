import { Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

class UserService {
    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User);
    async find(req: Request, res: Response) {
        try {
            const user = await this.userRepository.find(
                // {
                //     take : 1
                // }
            );
            
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }

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
            const id = parseInt(req.params.id);
            const user = await this.userRepository.update(id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json("Terjadi kesalahan pada server");
        }
    }
}
export default new UserService