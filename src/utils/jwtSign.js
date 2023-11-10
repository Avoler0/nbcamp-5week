const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJwtAccessToken = (data) =>{
  return jwt.sign(
    data,
    process.env.JWT_SECRET_KEY,
    { expiresIn: '12h' }
  )
}

module.exports = { createJwtAccessToken }