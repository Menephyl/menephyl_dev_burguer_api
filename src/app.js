/** biome-ignore-all assist/source/organizeImports: <explanation> */
import express from 'express';

import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/product-file',fileRouteConfig);
app.use('/category-file',fileRouteConfig);
app.use(routes)
export default app;
