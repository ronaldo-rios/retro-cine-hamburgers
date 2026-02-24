import { Router } from 'express'
import auth from './auth'
import product from './product'

const router = Router()

router.use('/auth', auth)
router.use('/', product)

export default router