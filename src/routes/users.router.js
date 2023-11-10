const express = require("express");
const { createRegister } = require("../controller/users/create");
const { loginUser } = require("../controller/users/read");

const usersRouter = express.Router();

usersRouter.post('/register', createRegister);
usersRouter.post('/login', loginUser);

module.exports = usersRouter;