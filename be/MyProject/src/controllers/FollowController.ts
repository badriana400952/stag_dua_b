import { error } from "console";
import { Request, Response } from "express";
import FollowsService from "../services/FollowsService";


class FollowController {
    async find(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession;
      const limit = (req.query.limit ?? 0) as number;
      const type = (req.query.type ?? "") as string;

      const response = await FollowsService.find(loginSession, type, limit);
      return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({error: error.message})
            
        }

    }

    // async find(req: Request, res: Response) {
    //     try {
    //       const loginSession = res.locals.loginSession;
    //       const limit = (req.query.limit ?? 0) as number;
    //       const type = (req.query.type ?? "") as string;
    
    //       const response = await FollowsService.find(loginSession, type, limit);
    //       return res.status(200).json(response);
    //     } catch (error) {
    //       return res.status(500).json({ error: error.message });
    //     }
    //   }
    // async findRandom(req: Request, res: Response) {
    //     try {
    //         const loginSession = res.locals.loginSession;
    //         const response = await FollowsService.findRandom(req.body, loginSession);
    //         return res.status(200).json(response);
    //     } catch (error) {
    //         console.error("Error in findRandom controller:", error);
    //         return res.status(500).json({ error: "Internal Server Error" });
    //     }
    // }
    async findRandom(req: Request, res: Response) {
        try {
            const response = await FollowsService.findRandom(req.query)
    
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    async create(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession;
            console.log("loginSessionloginSession controler", loginSession)
            // const respons = await FollowsService.create(loginSession, req.body);
            const response = await FollowsService.create(req.body, loginSession);
            console.log("req.bodyreq.bodyreq.bodyreq.body controler", req.body)

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession;
            const followedUserId = parseInt(req.params.followed_user_id);
            console.log("followedUserIdfollowedUserIdfollowedUserId controler", followedUserId)
      
            const response = await FollowsService.delete(
              followedUserId,
              loginSession
            );
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}
export default new FollowController();