##Pré-requisitos

Antes de rodar o projeto, instale: 
- [Node.js](https://www.nodejs.tech/pt-br/download)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

##Como rodar:

1. Clone esse repositório: https://github.com/rafaelfranzon290905/desafio-tecnico-junior.git
2. Entre na pasta backend e instale as dependências
```
cd backend
npm install
```
3. Use Sequelize para criar o banco de dados
```
-npx sequelize-cli db:migrate
```
4. Inicie o servidor do Backend
```bash
-node index.js
```
5. Em outro terminal, instale e inicie o Frontend
```bash
-cd ..
-cd frontend
-npm install
-npm start
```