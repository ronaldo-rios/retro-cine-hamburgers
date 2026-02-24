import express from 'express'
import * as productController from '../controllers/product-controller'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.get('/product', authMiddleware, productController.getProducts)

export default router