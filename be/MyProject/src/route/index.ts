import * as express from 'express'
import ThreadsController from '../controllers/ThreadsController'
import { Request, Response } from 'express'
import AuthorController from '../controllers/AuthorController'
import authenticate from '../middlewares/authMiddleware'

import { upload } from '../middlewares/uploadFile'
import UserController from '../controllers/UserController'
import RepilesController from '../controllers/RepilesController'
import ThreadsQueue from '../queque/ThreadsQueue'
import QueueController from '../queque/QueueController'
import QueControllers from '../controllers/QueControllers'
const router = express.Router()

router.get("/", (req, res) => {
    res.send('hello world')
})

// router.get("/thread", ThreadsController.find)
router.get("/thread", authenticate, ThreadsController.find)
router.get("/thread/:id", authenticate, ThreadsController.findOne)
router.post("/thread/created", authenticate, upload("aut_img"), ThreadsQueue.create)
router.delete("/thread/delete/:id", authenticate, ThreadsController.delete)
router.patch("/thread/update/:id", authenticate, ThreadsController.update)

// Auth
router.post("/register", AuthorController.register)
router.post("/login", AuthorController.login)
router.get("/check", authenticate, AuthorController.check)
// router.delete("/auth/user/delete/:id", authenticate, ThreadsController.delete)
// router.patch("/auth/user/update/:id", authenticate, ThreadsController.update)


router.get("/user", authenticate, UserController.find)
router.get("/user/:id", authenticate, UserController.findOne)
router.post("/user/created", authenticate, upload("aut_img"), UserController.create)
router.delete("/user/delete/:id", authenticate, UserController.delete)
router.patch("/user/update/:id", authenticate, UserController.update)

// Ryply
router.get("/replys", authenticate, RepilesController.find)
router.post("/reply", authenticate, RepilesController.create)

// router.get("/threads", (req: Request, res: Response) => {
//     res.status(200).json({
//         message: "Hello thisis threads!",
//     })
// });
export default router