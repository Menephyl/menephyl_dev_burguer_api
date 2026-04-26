import { Router } from 'express'
import multer from 'multer'
import ProductController from './app/controllers/ProductsController.js'
import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import multerConfig from './config/multer.cjs'
import CategoryController from './app/controllers/CategoryController.js'
import adminMiddleware from './app/middleware/admin.js'
import authMiddleware from './app/middleware/auth.js'
import OrderController from './app/controllers/OrderController.js'

const routes = new Router()
const uploads = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/products', adminMiddleware, uploads.single('file'), ProductController.store,)

routes.put('/products/:id', adminMiddleware, uploads.single('file'), ProductController.update,)

routes.get('/products', ProductController.index,)

routes.post('/categories', adminMiddleware, uploads.single('file'), CategoryController.store,)

routes.put('/categories/:id', adminMiddleware, uploads.single('file'), CategoryController.update,)

routes.get('/categories', CategoryController.index,)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', adminMiddleware, OrderController.update)
routes.get('/orders', OrderController.index)


export default routes