

module.exports={
    dialect: 'postgres',
    host: 'localhost',
    port : 5432,
    username:'admin',
    password:'admin',
    database:'dev-burguer-db',
    define:{
        timestamps: true,
        underscored:true,
        underscoredAll:true,
    }
}

// usuarios -> nome, email,telefone, data criação , data atualização, 
// nome, email,telefone , data_criação,dataCriação