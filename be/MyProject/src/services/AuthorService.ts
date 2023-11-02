import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entities/User";
import {  loginSchema, registerSchema } from "../utils/author";
// import * as jwt from "jsonwebtoken"
import jwt = require("jsonwebtoken")
import bcrypt = require("bcrypt")
// import * as bcrypt from "bcrypt"
class AuthorService {

    private readonly authRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(req: Request, res: Response) {
        try {
          const data = req.body;
    
          
    
          const { error, value } = registerSchema.validate(data);
          if (error) {
            return res.status(400).json({ error: error });
          }
    
          const passwordQ = await bcrypt.hash(value.password, 10)
          const checkEmail = await this.authRepository.count(
            {
                where : {
                    email: value.email,
                    name : value.name,
                }
            }
          )
    
          if (checkEmail > 0){
            return res.status(400).json ("Error Email / username sudah ada")
          }
    
          const user = this.authRepository.create({
            username: data.username,
            name: data.name,
            email: data.email,
            password: passwordQ,
          });
          const createdUser = this.authRepository.save(user);
          return res.status(200).json({
            message : `Data berhasi ldi register, ${createdUser}`
          });
        } catch (error) {
          return res.status(500).json("Terjadi kesalahan pada server");
        }
      }

      async login(req: Request, res: Response) {
        try {
          const data = req.body;
    
          const { error, value } = loginSchema.validate(data);
          if (error) {
            return res.status(400).json({ error: error });
          }
    
          const checkEmail = await this.authRepository.findOne(
            {
                where : {
                    email: value.email,
                    name : value.name
                },
                select:["id", "username","name","email","password","profile_deskripsi", "profile_picture", "followers", "followings"], 
            }
          )
    
          if (!checkEmail){
            return res.status(400).json ("Error Email / password is wrong")
          }
    
    
          const isPasswordValid = bcrypt.compare(value.password, checkEmail.password)
          if (!isPasswordValid) {
            return res.status(400).json({
                error : "Email/passwrod is wrong!"
            })
          }
          const user = this.authRepository.create({
            id : checkEmail.id,
            name: checkEmail.name,
            username: checkEmail.username,
            email: checkEmail.email,
            profile_deskripsi: checkEmail.profile_deskripsi,
            profile_picture: checkEmail.profile_picture,
            followers: checkEmail.followers,
            followings: checkEmail.followings,

            

            // id: checkEmail.id,
        // email: checkEmail.email,
        // password: checkEmail.password,
        // fullname: checkEmail.fullname,
        // username: checkEmail.username,
        // picture: checkEmail.picture,
        // description: checkEmail.description,
        // followers_count: checkEmail.followers.length,
        // followings_count: checkEmail.followings.length,

          });
          const token = jwt.sign({user} , "bagiansecret",{expiresIn : "1h"})
          
          return res.status(200).json({
            user : user,
            token
          });
        } catch (error) {
          return res.status(500).json("Terjadi kesalahan pada server");
        }
      }
    
      async check(req: Request, res: Response) {
        // try {
    
        //     const loginSession = res.locals.loginSession
    
        //   const user = await this.authRepository.findOne(
        //     {
        //         where : {
        //             id: loginSession.user.id,
        //         },
        //         select:["id", "username","name","email","password", "profile_deskripsi", "profile_picture" ]
        //     }
        //   )
    
          
        //   return res.status(200).json({
        //     user,
        //     message : "Token is valid"
        //   });
        // } catch (error) {
        //   return res.status(500).json("Terjadi kesalahan pada server");
        // }

        const loginSession = res.locals.loginSession;
        console.log("loginsession", loginSession);
  
        const user = await this.authRepository.findOne({
          where: { id: loginSession.user.id },
          select: [
            "id",
            "email",
            "name",
            "username",
            "password",
            "profile_deskripsi",
            "profile_picture",
            // "followers",
            // "followings",
          ],
          relations: ["followers", "followings"],
        });
        return res.status(200).json({
          message: "token is valid",
          user: {
            id : user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            profile_deskripsi: user.profile_deskripsi,
            profile_picture: user.profile_picture,
            // followers: user.followers,
            // followings: user.followings,
            
          },
        });
      } catch (error) {
        console.log(error);
        
      
      }
      // async delete(req: Request, res: Response) {
      //   try {
      //     const id = parseInt(req.params.id)
      //     const deletedUser = await this.authRepository.delete(id);
      //     return res.status(200).json(deletedUser);
      //   } catch (error) {
      //     return res.status(500).json("Terjadi kesalahan pada server");
      //   }
      // }
      // async update(req: Request, res: Response) {
      //   try {
      //     const id = parseInt(req.params.id)
      //     const user = await this.authRepository.update(id, req.body);
      //     return res.status(200).json(user);
      //   } catch (error) {
      //     return res.status(500).json("Terjadi kesalahan pada server");
      //   }
      // }
    
      
    }    


export default new AuthorService