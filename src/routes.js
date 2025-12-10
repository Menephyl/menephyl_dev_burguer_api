
import { Router } from 'express';

import ProductController from './app/controllers/ProductController.js';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './middlewares/auth.js';
import CategoryController from './app/controllers/CategoryController.js';
import adminMiddleware from './middlewares/admin.js';
const routes = new Router();

const upload = multer(multerConfig);
// método http POST 
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);adminMiddleware
routes.post('/products', upload.single('file'),ProductController.store);
routes.get('/products',ProductController.index);

routes.post('/categories',adminMiddleware ,CategoryController.store);
routes.get('/categories',CategoryController.index);
export default routes;
