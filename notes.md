BACKEND WITH:
NODE.JS
EXPRESS,
MONGODB
POSTGRESQL
DOCKER
BIOME.JS
BCRYPT
YUP
JWT
SEQUELIZE

make package.json of project
install pnpm and EXPRESS
biome.js  -> code standardization tool performant linter for JavaScript, TypeScript, JSX, CSS
docker assures standardization of environment with containers
create database with docker and postgresql
ORM -> Sequelize
migrations
mvc software architecture

config routes.js
routes as knewed as endpoints
UserController -> store, index, show, update, delete
// store -> cria dado
// index -> lista dados
// show  ->> lista dado
// update  ->> atualiza dado
// delete  ->> remove dado

user config
password encrypt

the best solutions in just a few lines of code

$ pnpm sequelize migration:create --name create-products-table

pnpm sequelize db:migrate

model product config

multer

images upload with multer

// erro 500 quebrou o backend

migrações fazem parte de um assunto muito sério, é importante verificar o que mexer.

lembrar que via sequelize é o seguinte
pnpm sequelize db:migrate roda a migração
pnpm sequelize db:migrate:undo desfaz a migração
pnpm sequelize db:migrate:undo:all desfaz todas as migrações
pnpm sequelize db:migrate:undo:all:create-users-table desfaz a migração create-users-table
