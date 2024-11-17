# Catálogo de Produtos

## Tecnologias e Bibliotecas Utilizadas

- **Node.js**
- **Express.js**
- **SQLite** e **Sequelize**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **Express Validator**
- **Swagger (swagger-ui-express, swagger-jsdoc)**

## Estrutura de Pastas
```
├── config/
│ └── config.js
├── controllers/
│ ├── authController.js
│ └── productController.js
├── docs/
│ └── swagger.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── index.js
│ ├── product.js
│ └── user.js
├── routes/
│ ├── authRoutes.js
│ └── productRoutes.js
├── .env
├── app.js
├── package.json
└── README.md
```


## Instruções para Configurar e Executar o Projeto

### Pré-requisitos

- **Node.js** instalado
- **NPM** ou **Yarn** instalado

### Passos

1. **Clonar o repositório**

   ```bash
   git clone <URL>
   cd api-catalogo-produtos
   ```

2. **Instalar as dependências**

   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto e configure:

   ```env
   PORT=3000
   JWT_SECRET= secretamente_secreto
   ```

4. **Iniciar o servidor**

   Para ambiente de produção:

   ```bash
   npm start
   ```

5. **Acessar a documentação Swagger**

   Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

## Testando a API

Utilize um cliente HTTP como **Insomnia**, ou a própria interface do Swagger para testar os endpoints.

### 1. Registrar um usuário

- **Endpoint:** `POST /auth/register`
- **Payload:**

  ```json
  {
    "username": "usu_ario",
    "password": "senha_mega_secreta"
  }
  ```

### 2. Fazer login

- **Endpoint:** `POST /auth/login`
- **Payload:**

  ```json
  {
    "username": "seu_usuario",
    "password": "sua_senha"
  }
  ```

- **Resposta:**

  ```json
  {
    "message": "Autenticado com sucesso",
    "token": "seu_token_jwt"
  }
  ```

### 3. Operações com produtos

Para ter acesso aos endpoints, incluir o cabeçalho de autorização com o token JWT:
Authorization: Bearer seu_token


#### Criar produto

- **Endpoint:** `POST /products`
- **Payload:**

  ```json
  {
    "name": "Produto Muito Caro",
    "description": "Descrição do produto caro",
    "price": 99999999.99
  }
  ```

#### Listar produtos

- **Endpoint:** `GET /products`

#### Obter produto por ID

- **Endpoint:** `GET /products/{id}`

#### Atualizar produto

- **Endpoint:** `PUT /products/{id}`
- **Payload:**

  ```json
  {
    "name": "Produto Y",
    "price": 149.99
  }
  ```

#### Excluir produto

- **Endpoint:** `DELETE /products/{id}`

# Alunos

Projeto realizado por:

[João Augusto]
[Lucas Vilela Roveri]
[Leonardo Carvalho]
[Maurício Lobato]
