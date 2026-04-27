# 🍔 DevBurguer - Back-End

Este é o back-end do projeto **DevBurguer**, uma aplicação completa que simula o funcionamento real de uma hamburgueria. O sistema foi dividido em duas partes — back-end e front-end — com foco total em criar uma estrutura robusta, segura e escalável para gerenciar usuários, produtos, categorias, pedidos e transações financeiras.

---

## 🧠 Objetivo
Desenvolver a estrutura completa de um sistema de pedidos de uma hamburgueria com autenticação, bancos de dados relacional e não-relacional, validação de dados, upload de arquivos e integração com sistema de pagamento.

---

## 🐳 Poder e Escala com Docker
Este projeto faz o uso **honroso e essencial** de **Contêineres Docker**! O ambiente de desenvolvimento é robustamente provisionado com Docker, garantindo que os bancos de dados (PostgreSQL e MongoDB) rodem de forma consistente, isolada e sem a necessidade de instalações manuais na máquina host. O Docker proporciona:
- **Praticidade extrema:** Suba todo o ambiente de banco de dados rapidamente.
- **Portabilidade:** Funciona exatamente da mesma maneira em qualquer máquina ou sistema operacional.
- **Escalabilidade:** Pronto para evoluir e facilitar processos de deploy, CI/CD e gerenciamento de infraestrutura.

---

## 🚀 Tecnologias Utilizadas

- **Node.js (JavaScript)** & **Express** - Base e roteamento do servidor;
- **PostgreSQL** – Banco de dados relacional (gerenciamento de Usuários, Produtos e Categorias);
- **MongoDB** – Banco não relacional baseado em coleções (gerenciamento de Pedidos/Orders);
- **Docker** – Contêineres para provisionamento de serviços e bancos de dados;
- **Yup** – Validação de dados de entrada;
- **JWT (JSON Web Token)** – Autenticação e segurança nas requisições;
- **Multer** – Upload de imagens de produtos;
- **Stripe** – Integração para pagamentos simulados (modo teste);
- **Dotenv** – Gerenciamento de variáveis de ambiente;
- **Bcrypt** – Criptografia de senhas;
- **Arquitetura MVC** – Controllers, Models, Schemas e Rotas organizadas.

---

## 📁 Estrutura do Projeto

```text
📦 devburguer-backend
 ┣ 📂 controllers
 ┣ 📂 models
 ┣ 📂 schemas
 ┣ 📂 routes
 ┣ 📂 middlewares
 ┣ 📂 uploads
 ┣ 📄 server.js
 ┣ 📄 .env
 ┣ 📄 package.json
```

---

## 🔒 Segurança
- **JWT** para autenticação de rotas protegidas;
- **Criptografia** de senhas com Bcrypt;
- **Validação rigorosa** de entrada de dados com Yup.

---

## 💸 Integração com Stripe
- Integração com a API da **Stripe** para simulação de pagamento;
- Testes realizados com chaves públicas e secretas em ambiente de desenvolvimento.

---

## 📌 Funcionalidades
- Cadastro e login de usuários;
- Cadastro de produtos e categorias;
- Upload de imagens para produtos com Multer;
- Listagem e edição de produtos;
- Criação e gerenciamento de pedidos no MongoDB;
- Pagamento simulado via Stripe;
- Rotas organizadas e separadas por responsabilidades (Padrão MVC).

---

## 🟣 Testes e Simulação com Insomnia
Como o foco atual é o desenvolvimento do Back-End, o uso do **Insomnia** recebe um destaque especial! Ele atua como o nosso "front-end" simulado durante o desenvolvimento:
- **Simulação Impecável:** Através do Insomnia, realizamos todas as chamadas de API, garantindo o funcionamento perfeito de cada endpoint antes da integração final com a interface do usuário.
- **Requisições Precisas:** Testes detalhados de rotas `GET`, `POST`, `PUT`, `PATCH` e `DELETE`, configurando adequadamente *headers*, tokens de autorização (`Bearer`) e envios *multipart/form-data* (essencial para o upload de imagens de produtos).
- **Agilidade no Desenvolvimento:** Identificação e resolução rápida de bugs, avaliando com precisão os retornos em JSON e os códigos de status HTTP da nossa API.

---

## 🧠 Aprendizados
- Integração e comunicação entre dois bancos de dados distintos na mesma aplicação (PostgreSQL e MongoDB);
- Boas práticas de organização de código e aplicação da arquitetura MVC;
- Segurança e autenticação robusta implementando JWT;
- Validação eficiente e clara no back-end com Yup;
- Construção de endpoints RESTful seguindo padrões e convenções de mercado;
- Gerenciamento de contêineres **Docker** para facilitação do ambiente;
- Ferramentas de testes de API como o **Insomnia** para estruturação e confiabilidade.

---

## 📍 Status
✅ **Projeto em constante evolução.** Parte back-end finalizada com todas as funcionalidades principais de uma hamburgueria moderna devidamente testadas e estruturadas.

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório:
```bash
git clone https://github.com/Matheus-Figueiredo-Dev/Devburguer-api.git
cd Devburguer-api
```

### 2. Instale as dependências:
```bash
yarn install
```

### 3. Suba os bancos de dados com Docker:
Certifique-se de que possui o **Docker** instalado e rodando. Caso utilize comandos manuais ou compose, inicie seus contêineres do PostgreSQL e MongoDB para preparar a base da aplicação.

### 4. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias:

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/devburguer
MONGO_URL=mongodb://localhost:27017/devburguer
JWT_SECRET=sua_chave_secreta
STRIPE_SECRET_KEY=sua_chave_stripe
```
> ⚠️ **Aviso:** Substitua `user`, `password`, e as chaves pelas suas credenciais reais.

### 5. Execute as Migrations (PostgreSQL):
Caso esteja utilizando o Sequelize CLI, rode as migrations para criar as tabelas:
```bash
yarn sequelize db:migrate
```

### 6. Inicie a aplicação:
```bash
yarn dev
```

### 7. Teste a API no Insomnia:
- Com a API rodando (por padrão em `http://localhost:3000`), abra o **Insomnia**.
- Crie ou importe suas requisições e comece a interagir de forma simulada com todos os endpoints disponíveis!
