import Sequelize, {Model} from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
        {
        name:Sequelize.STRING,
        
      
    },
     {
      sequelize,
      tableName: 'categories',
    }
);
  }
}
export default Category;

      