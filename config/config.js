require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_DEVELOPMENT_ID,
    "password": process.env.DB_DEVELOPMENT_PW,
    "database": process.env.DB_DEVELOPMENT_NAME,
    "host": process.env.DB_DEVELOPMENT_URL,
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
    "username": process.env.DB_PRODUCTION_ID,
    "password": process.env.DB_PRODUCTION_PW,
    "database": process.env.DB_PRODUCTION_NAME,
    "host": process.env.DB_PRODUCTION_URL,
    "dialect": "mysql"
  }
}
