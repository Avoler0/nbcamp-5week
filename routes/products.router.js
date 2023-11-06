import express from "express";
import { readAllProduct, readByIdProduct } from "../controller/read.js";
import { createProduct } from "../controller/create.js";
import { deleteProduct } from "../controller/delete.js";
import { updateProduct } from "../controller/update.js";

const router = express.Router();

// Create
router.post('/product',createProduct)

// Read
router.get('/products',readAllProduct)
router.get('/product/:productId', readByIdProduct)

// Update
router.patch('/product/:productId',updateProduct)

// Delete
router.delete('/product/:productId',deleteProduct)

export default router;