const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(99).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

module.exports = contactSchema;
