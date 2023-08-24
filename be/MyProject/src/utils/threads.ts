import Joi = require("joi");

export  const createdThreadSchema = Joi.object().keys({
    content: Joi.string().allow(null, ""),
    image: Joi.string(),
  });


  export  const updatedThreadSchema = Joi.object().keys({
    content: Joi.string(),
    image: Joi.string(),
  });

  export const createdReplyScehma = Joi.object().keys({
    comment: Joi.string().required(),
  });
