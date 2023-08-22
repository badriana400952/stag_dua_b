import * as Joi from "joi"

export const registerSchema = Joi.object().keys({
    user_name: Joi.string().required(),
    user_fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),

})

export  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  