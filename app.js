import express from "express";
import router from "./routes/products.router.js";
import { config } from 'dotenv';
import { connect } from "./schemas/index.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
config();

const swaggerOptions = {
  swaggerDefinition:{
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'express'
    },
    basePath: '/'
  },
  apis:['./swagger/*.js','./routes/products.router.js']
}

const openapiSpectification = swaggerJSDoc(swaggerOptions);

const app = express();
const port = process.env.SERVER_PORT;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpectification));
app.use(express.json());
app.use('/api', router)

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');

  connect();
});

