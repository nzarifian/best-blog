var entry = require('../models/admin');
var express = require('express');
var router = express.Router();



Users.find({email:'admin@blog.com'}, function(err, user){
        if (err){
            console.log(err);
        }else {
            console.log(user);
            if (user[0]) {
                res.send('Admin account already exists')
            } else {
                var User = new Users({email:'admin@blog.com', password: '1234'});
                User.save(function(err, user) {
                    if (err)  {
                        console.log(err);
                    } else {
                        console.log('user has been created: ' + user);
                    }
                });
            }
        } 
    })
};
module.exports = router;