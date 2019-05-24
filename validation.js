//Validation
const Joi = require('@hapi/joi');


//Register Validation
const registerValidation = (data) => {
    const schema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(2).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data,schema);
};
//Register Validation
const loginValidation = (data) => {
    const schema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(2).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data,schema);
};
module.exports.registerValidation = registerValidation;
