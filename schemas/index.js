import mongoose from "mongoose";
import { config } from 'dotenv';

config();

const id = process.env.MONGO_DB_ID;
const pw = process.env.MONGO_DB_PW;

export const connect = () => {
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
