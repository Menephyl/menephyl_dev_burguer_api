import { Router } from 'express'
import multer from 'multer'
import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductsController.js'
import multerConfig from './config/multer.cjs'

const routes = new Router()
const uploads = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.post('/products', uploads.single('file'), ProductController.store)

export default routes