const CryptoJS = require("crypto-js");

const encryptPassword = (password) => {
  return CryptoJS.SHA256(password+process.env.PASSWORD_SALT, process.env.CRYPTO_SECRET_KEY).toString();
}

module.exports = encryptPassword;