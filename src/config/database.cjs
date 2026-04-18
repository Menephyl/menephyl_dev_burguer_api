module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'admin',
    password: '123456',
    database: 'dev-burguer-db', //menephyl-dev-burguer-api
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
} // sequelize cli nao entende module export 

// users -> name, email, phone, password
// products -> name, price, image, category
// orders -> user_id, product_id, quantity, total
// categories -> name