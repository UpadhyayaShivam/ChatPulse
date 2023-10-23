const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();


userRouter.get('/', userController.helloRoute);

userRouter.post('/register', userController.registerUser);


module.exports = userRouter;


