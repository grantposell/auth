const router = require('express').Router();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');

const schema = {
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(6).required()
};

router.post('/register', async (req, res) => {
    const {error} = Joi.validate(req.body, schema);
    if(error) res.status(400).send(error.details[0].message);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser= await user.save()
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});




module.exports = router;
