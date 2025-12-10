
import * as Yup from 'yup';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
class ProductController {
    async store(request, response) {
    const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category_id: Yup.number().required(),
    });
    try{
        schema.validateSync(request.body,{
            abortEarly:false,
             });
            }catch(err){
                return response.status(400).json({error:err.errors})
            }
    const {name,price,category_id} = request.body;
    const {filename}= request.file;
const newProduct = await Product.create({
    name,
    price,
    category_id,
    path:filename
})
 return response.status(201).json({newProduct});
        
    }
    
    async index(_request,response){  
        const products = await Product.findAll({
            include:{
                model: Category,
                as: 'category',
                attributes: ['id','name'],
            }
        });
        
        return response.status(200).json(products);
    }
}
    export default new ProductController();