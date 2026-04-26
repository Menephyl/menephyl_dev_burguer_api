import { Model, Sequelize } from "sequelize";

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3001/category-file/${this.path}`   // quando fazer o deploy colocar a rota do backend aqui
                }
            }
        }, {
            sequelize,
            tableName: 'categories',
        })
        return this;
    }
}

export default Category