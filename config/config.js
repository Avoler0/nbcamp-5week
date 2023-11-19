require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_ID,
    "password": process.env.DB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_URL,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_ID,
    "password": process.env.DB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_URL,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_ID,
    "password": process.env.DB_PW,
    "database": process.env.DB_NAME,
    "host": process.env.DB_URL,
    "dialect": "mysql"
  }
}
