const express = require('express');
const UserModel = require('../model/userModel');
const router = express.Router();

router.get('/add', require('../controlers/userControler/add'));
router.get('/allUsers', require('../controlers/userControler/getAllUsers'));
router.get('/:firstName', require('../controlers/userControler/getUser'));

router.post('/register', require('../controlers/userControler/register'));

module.exports = router;
