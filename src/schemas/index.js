const mongoose = require("mongoose");
require("dotenv").config();

const id = process.env.MONGO_DB_ID;
const pw = process.env.MONGO_DB_PW;

const connect = () => {
  mongoose
  .connect(`mongodb+srv://${id}:${pw}@cluster0.dkjqggf.mongodb.net/`,{
    dbName:'node_lv1'
  })
  .then((res)=>{
    console.log('연결 성공')
  })
  .catch((err)=>{
    console.log('몽고디비 연결 실패')
  })
}

module.exports = connect;