import Sequelize from "sequelize"
import databaseConfig from "../config/database.cjs"
import User from "../app/models/User.js"

const models = [User]
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
    }
}

export default new Database()