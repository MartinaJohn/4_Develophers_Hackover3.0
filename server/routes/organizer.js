const router = require('express').Router();
let User = require('../models/user-hc.models');

//Handle incoming http get request
router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error '+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email_id = req.body.email_id;
    const password = req.body.password;
    const location = req.body.location;

    const newUser = new User({
        username,
        email_id, 
        password, 
        location,
    });
    //const newUser = new User({username});
    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error '+err));
    
});
module.exports = router;