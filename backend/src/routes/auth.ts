import express from 'express'
import * as authController from '../controllers/auth-controller'

const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/user', authController.auth)

export default router