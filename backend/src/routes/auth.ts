import express from 'express'
import * as authController from '../controllers/auth-controller'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', authMiddleware, authController.logout)
router.get('/user', authMiddleware, authController.authUser)

export default router