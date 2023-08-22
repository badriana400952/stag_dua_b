import Joi = require("joi");

export  const createdThreadSchema = Joi.object().keys({
    content: Joi.string().required(),
    aut_img: Joi.string().required(),
  });


  export  const updatedThreadSchema = Joi.object().keys({
    content: Joi.string(),
    aut_img: Joi.string(),
  });

  export const createdReplyScehma = Joi.object().keys({
    comment: Joi.string().required(),
  });
