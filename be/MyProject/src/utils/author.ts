// import * as Joi from "joi"
import Joi = require("joi")

export const registerSchema = Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),

})

export  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  