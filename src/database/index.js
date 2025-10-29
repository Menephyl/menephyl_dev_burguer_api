import { Sequelize } from 'sequelize';
import User from '../app/models/user.js';
import databaseConfig from '../config/database.cjs';

const models = [User];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  } 
}
export default new Database();
