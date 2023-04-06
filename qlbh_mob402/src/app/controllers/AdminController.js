const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {
    listUser(req, res, next) {
        User.find({})
            .then(users  => res.render('admin/list-user', {
                users : mutipleMongooseToObject(users)
            }))
            .catch(next)
    }
}

module.exports = new AdminController;