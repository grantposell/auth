const router = require('express').Router();
const verify = require('./verifyTokens');

router.get('/', verify, (req,res) => {
    res.json({
        posts: {
            title: 'my first post',
            description: 'random data you shouldnt access'
        }
    });
});

module.exports = router