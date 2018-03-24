var express = require('express');
var router = express.Router();
const Users = require('../controllers/users')

/* GET users listing. */
router.get('/',Users.viewAll)
router.post('/admin',Users.createAdmin)
router.post('/signup',Users.signup)
router.post('/signin',Users.signin)
module.exports = router;
