import express from "express";
import { readAllProduct, readByIdProduct } from "../controller/read.js";
import { createProduct } from "../controller/create.js";
import { deleteProduct } from "../controller/delete.js";
import { updateProduct } from "../controller/update.js";

const router = express.Router();

// Create
router.post('/products',createProduct)

// Read
router.get('/products',readAllProduct)
router.get('/products/:productId', readByIdProduct)

// Update
router.patch('/products/:productId',updateProduct)

// Delete
router.delete('/products/:productId',deleteProduct)

export default router;