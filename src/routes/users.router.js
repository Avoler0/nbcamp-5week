const express = require("express");
const { createRegister } = require("../controller/users/create");
const { loginUser, readMyInfo } = require("../controller/users/read");
const certifiedMiddleWare = require("../../src/middleware/certified");

const usersRouter = express.Router();

usersRouter.get('/read', certifiedMiddleWare, readMyInfo);

usersRouter.post('/register', createRegister);
usersRouter.post('/login', loginUser);

module.exports = usersRouter;