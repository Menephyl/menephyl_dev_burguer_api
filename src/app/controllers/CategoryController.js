import * as Yup from 'yup'
import Category from '../models/Category.js';


class CategoryController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
        });
        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const userId = request.userId;

        const user = await User.findByPk(userId); // find by primary key
        if (!user.admin) {
            return response.status(401).json({ error: "Unauthorized" })
        }
        const { name } = request.body;

        const existingCategory = await Category.findOne({
            where: {
                name,
            },
        });

        if (existingCategory) {
            return response.status(400).json({ error: "Category already exists. Make another one or review our database!" })
        }

        const newCategory = await Category.create({
            name,
        });

        return response.status(201).json({ newCategory, message: "Category created successfully" })
    }
    // getAll() 
    async index(_request, response) {
        const categories = await Category.findAll()
        return response.status(200).json({ categories })
    }


}

export default new CategoryController()