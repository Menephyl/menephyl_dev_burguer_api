import { Router } from 'express'
import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductsController.js'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.post('/products', ProductController.store)
export default routes