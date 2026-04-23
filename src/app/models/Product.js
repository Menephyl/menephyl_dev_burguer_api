import Sequelize, { Model } from 'sequelize';
// dentro do sequelize ja existe uma classe  model
class Product extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3001/product-file${this.path}`   // quando fazer o deploy colocar a rota do backend aqui
                }
            }
        },
            {
                sequelize,
                tableName: 'products',
            },
        );
    }
}

export default Product;


// campo virtual
// campo que nao passsa pelo banco, é criado na hora que vai ser usado
// exemplo: url da imagem