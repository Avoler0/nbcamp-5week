const express = require("express");
const { readAllProduct, readByIdProduct } = require("../controller/products/read");
const { createProduct } = require("../controller/products/create");
const { deleteProduct } = require("../controller/products/delete");
const { updateProduct } = require("../controller/products/update");
const certifiedMiddleWare = require("../../src/middleware/certified");

const productsRouter = express.Router();

productsRouter.use(certifiedMiddleWare);

// Create
productsRouter.post('/product',certifiedMiddleWare,createProduct)

// Read
productsRouter.get('/products',readAllProduct)
productsRouter.get('/product/:productId', readByIdProduct)

// Update
productsRouter.patch('/product/:productId',updateProduct)

// Delete
productsRouter.delete('/product/:productId',deleteProduct)

module.exports = productsRouter;

