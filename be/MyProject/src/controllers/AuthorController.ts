import { Request, Response } from "express";
import AuthorService from "../services/AuthorService";
import { expression } from "joi";


 class AuthorController {
    register(req: Request, res: Response) {
        AuthorService.register(req,res)
    }
    login(req:Request, res:Response){
        AuthorService.login(req,res)
    }
    check(req: Request, res: Response) {
        AuthorService.check(req,res)
    }
    // delete(req: Request, res: Response) {
    //     AuthorService.delete(req, res)
    // }
    // update(req: Request, res: Response) {
    //     AuthorService.update(req, res)
    // }

}

export default new AuthorController