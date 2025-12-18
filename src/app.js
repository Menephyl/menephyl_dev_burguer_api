/** biome-ignore-all assist/source/organizeImports: <explanation> */
import cors from 'cors';
import express from 'express';
// import { resolve } from 'node:path';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(cors(

    // origin: process.env.CORS_ORIGIN


));

app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes)
export default app;
