import { Router } from 'express'
import multer from 'multer'
import ProductController from './app/controllers/ProductsController.js'
import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import multerConfig from './config/multer.cjs'
import authMiddleware from './middleware/auth.js'

const routes = new Router()
const uploads = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.post('/products', uploads.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

export default routes