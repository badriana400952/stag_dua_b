import { Request, Response } from "express";
import QueueController from "../queque/QueueController";
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
// INI TIDAK TERPAKAI LAIGI KARENA SUDAH DI UPDATE
class QueControllers {
    queue(req: Request, res: Response) {
        QueueController.queue(req, res)
    }
   

}
export default new QueControllers()