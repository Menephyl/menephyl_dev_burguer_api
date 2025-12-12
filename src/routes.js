import { Router } from 'express';

import ProductController from './app/controllers/ProductController.js';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';
import adminMiddleware from './app/middlewares/admin.js';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

const upload = multer(multerConfig);
// método http POST
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
adminMiddleware;
routes.post('/products', upload.single('file'), ProductController.store);

routes.put('/products/:id', upload.single('file'), ProductController.update);
routes.get('/products', ProductController.index);
routes.post('/categories', upload.single('file'), CategoryController.store);
routes.post('/categories', adminMiddleware, CategoryController.store);
routes.put(
  '/categories/:id',
  adminMiddleware,
  upload.single('file'),
  CategoryController.update,
);
routes.get('/categories', CategoryController.index);

routes.get('/orders', OrderController.index);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', adminMiddleware, OrderController.update);
export default routes;
