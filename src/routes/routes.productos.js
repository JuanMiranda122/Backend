import express from 'express';
import { deleteProducts, getProducts, patchProdcut, postProdcuts } from '../controllers/controllers.products.js';

const productsRouter = express.Router();

productsRouter.get('/productos', getProducts)
productsRouter.delete('/productos', deleteProducts)
productsRouter.patch('/productos', patchProdcut)
productsRouter.post('/productos', postProdcuts)

export default productsRouter; 