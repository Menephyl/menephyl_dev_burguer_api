import Sequelize, { Model } from 'sequelize';
// dentro do sequelize ja existe uma classe  model
class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
        }, {
            sequelize,
            tableName: 'users',

        },
        );
    }
}

export default User;