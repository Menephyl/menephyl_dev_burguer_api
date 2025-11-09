/** biome-ignore-all assist/source/organizeImports: <explanation> */
import express from 'express';

import routes from './routes.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(routes);
export default app;
