var express = require('express');
var router = express.Router();
const userSchema = require('../Modals/UserSchema');
const UserReadController = require('../Controllers/UserReadController');
const UserEditController = require('../Controllers/UserEditController');
const UserCreateController = require('../Controllers/UserCreateController');
const UserDeleteController = require('../Controllers/UserDeleteController');
const UserUpdateController = require('../Controllers/UserUpdateController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('UserForm');
});
//Route for create users
router.post("/CreateUser",UserCreateController);

//Route for Get ALL users
router.get('/all-Users',UserReadController);

//Route for display Edit users
router.get('/EditUser/:id',UserEditController);

//Route for delete user
router.delete('/deleteUser/:id',UserDeleteController);

//Route for update user
router.put('/updateUser/:id',UserUpdateController);

module.exports = router;
