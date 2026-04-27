import express from 'express';
import fileRouteConfig from './config/fileRoutes.cjs';
import routes from './routes.js';
import cors from 'cors';


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/product-file', fileRouteConfig)
app.use('/category-file', fileRouteConfig)
app.use(routes)

export default app


/*  
class App {
constructor(){
this.app = express()
this.app.use(cors(https://www.devburguer.com.br))
this.middlewares()
this.routes()

}
}

*/