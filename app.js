const express = require("express");
const productsRouter = require("./src/routes/products.router");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const usersRouter = require("./src/routes/users.router");

const fs = require('fs');
require("dotenv").config();

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

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpectification));

app.use('/api', express.urlencoded({extended:false}), productsRouter);
app.use('/api/account', express.urlencoded({extended:false}), usersRouter);

app.get('/',(req,res)=>{
  const index = fs.readFileSync('./index.html')
  res.sendFile(__dirname + '/index.html');
})
app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');

});

