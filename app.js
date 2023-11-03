import express from "express";
import router from "./routes/products.router.js";
import { config } from 'dotenv';
import mongoose from "mongoose";
import { connect } from "./schemas/index.js";
config();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', router)

const id = process.env.MONGO_DB_ID;
const pw = process.env.MONGO_DB_PW;

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');

  connect();
});

