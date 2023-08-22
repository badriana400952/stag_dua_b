import { Request, Response } from "express"
import RepilesService from "../services/RepilesService"

class RepilesController {
    async find(req: Request, res: Response) {
        try {

            const response = await RepilesService.find(req.query);
            return res.status(200).json(response)
        } catch (error) {
            return res
            .status(500)
            .json({ error: "Terjadi kesalahan pada server" });
        }
    }

   

    async create(req: Request, res: Response) {
        // return await RepilesService.create(req, res);
        try {
            const loginSession = res.locals.loginSession;

            const response = await RepilesService.create(req.body, loginSession);
            return res.status(200).json(response)
        } catch (error) {
            return res
            .status(500)
            .json({ error: "Terjadi kesalahan pada server" });
        }
    }
   
}

export default new RepilesController