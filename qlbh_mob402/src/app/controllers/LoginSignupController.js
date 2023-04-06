const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');


class LoginSignupController {

    //[GET] /loginsignup/login
    login(req, res) {
        res.render('login');
    }

    //[GET] /loginsignup/signup
    signup(req, res) {
        res.render('signup')
    }

    //[post] /loginsignup/list
    listed(req, res, next) {
        
        if(req.body.repassword === req.body.password){
            const user = new User(req.body);
            user.save()
                .then(() => res.redirect('/admin/list/user'))
                .then(next)
        }else{
            res.send(req.body.repassword)
        }
     
       
    }

}

module.exports = new LoginSignupController;