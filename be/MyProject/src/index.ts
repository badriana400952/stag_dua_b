import { AppDataSource } from "./data-source"
// import { User } from "./entities/User"
import router from "./route"
// import * as express from 'express'
import express = require('express')
// import * as dotenv from 'dotenv'
import 'dotenv/config'
// import { Request, Response } from 'express'
var cors = require('cors')

AppDataSource.initialize().then(async () => {

    // const express = require('express')
    const app = express();
    const port = 8000;

    app.use(express.json());
    app.use(cors())

    
    // app.use(cors({
    //     "origin": '*', // Atur domain yang diizinkan
    //     "methods": 'GET,PUT,POST,DELETE', // Atur metode HTTP yang diizinkan
    //     "optionsSuccessStatus": 204, // Set status sukses untuk opsi pra-penerbangan
    // }));    

    app.use('/api/', router);
    app.use(express.static("uploads"));

    // app.get("/", (req: Request, res: Response) => {
    //     res.send("hallowikdcgiudc")
    // })
    // app.get("/reads", (req: Request, res: Response) => {
    //     res.send("ppp")
    // })

    app.listen(port, () => {
        console.log(`Example app listening on localhost:${port}`)
    })

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
