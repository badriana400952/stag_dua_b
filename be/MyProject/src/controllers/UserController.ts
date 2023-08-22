import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    find(req: Request, res: Response) {
        UserService.find(req, res)
    }
    findOne(req: Request, res: Response) {
        UserService.findOne(req, res)
    }
    create(req: Request, res: Response) {
        UserService.create(req, res)
    }
    delete(req: Request, res: Response) {
        UserService.delete(req, res)
    }
    update(req: Request, res: Response) {
        UserService.update(req, res)
    }

}
export default new UserController()