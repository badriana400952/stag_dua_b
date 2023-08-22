import { Request, Response } from "express";
import QueueController from "../queque/QueueController";

class QueControllers {
    queue(req: Request, res: Response) {
        QueueController.queue(req, res)
    }
   

}
export default new QueControllers()