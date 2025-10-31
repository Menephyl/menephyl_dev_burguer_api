
import { Router } from 'express';

import UserController from './app/controllers/UserController.js';

const routes = new Router();

// método http

routes.post('/users', UserController.store);

export default routes;
