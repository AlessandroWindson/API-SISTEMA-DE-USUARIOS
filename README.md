## **API - SISTEMA DE USUÁRIOS**

**Este é um projeto de API para um sistema de usuários, desenvolvido em Node.js utilizando Express e Sequelize como ORM (Object-Relational Mapping). A API permite operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar usuários em um banco de dados MySQL.**

## **📋 PRÉ-REQUISITOS**

**Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:**

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm), Express, Sequelize (instalado com o Node.js)
- MySQL ([Download MySQL](https://www.mysql.com/))

## **🔧 INSTALAÇÃO**

### **Clone este repositório:**

```bash
git clone https://github.com/seu-usuario/api-sistema-usuarios.git

```

### **Navegue até o diretório do projeto:**

```bash
cd api-sistema-usuarios

```

### **Instale as dependências:**

```bash
npm install

```

## **🔨 CONFIGURAÇÃO**

**Renomeie o arquivo `.env.example` para `.env` e configure com as informações do seu banco de dados MySQL:**

```makefile
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_de_acesso
DB_NAME=sistema_de_usuarios_development
PORT=3000

```

**Certifique-se de que seu banco de dados MySQL está em execução e que o banco de dados `sistema_de_usuarios_development` está criado.**

## **🚀 EXECUTANDO A APLICAÇÃO**

### **Inicie o servidor:**

``bash`
npm run dev

```

**O servidor estará rodando na porta 3000. Você poderá acessar a API em `http://localhost:3000/api/usuarios`.**

## **📚 ENDPOINTS DA API**

### **CRIAR UM USUÁRIO**

- **URL:** `/api/usuarios`
- **Método:** `POST`
- **Corpo da Requisição:**

```json
{
  "nome": "Nome do Usuário",
  "email": "email@example.com",
  "senha": "senha_123"
}

```

### **LISTAR TODOS OS USUÁRIOS**

- **URL:** `/api/usuarios`
- **Método:** `GET`

### **OBTER UM USUÁRIO POR ID**

- **URL:** `/api/usuarios/:id`
- **Método:** `GET`

### **ATUALIZAR UM USUÁRIO**

- **URL:** `/api/usuarios/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**

```json
jsonCopiar código
{
  "nome": "Novo Nome do Usuário",
  "email": "novo_email@example.com",
  "senha": "nova_senha_456"
}

```

### **DELETAR UM USUÁRIO**

- **URL:** `/api/usuarios/:id`
- **Método:** `DELETE`

## **🛠 TESTANDO A API**

**Você pode usar ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints da API.**

### **EXEMPLO DE CONFIGURAÇÃO NO INSOMNIA**

1. **Abra o Insomnia e crie uma nova requisição.**
2. **Selecione o método HTTP (GET, POST, PUT, DELETE).**
3. **Insira a URL do endpoint (ex: `http://localhost:3000/api/usuarios`).**
4. **Para requisições POST e PUT, vá para a aba "Body" e selecione "JSON", depois insira o corpo da requisição.**
5. **Clique em "Send" para enviar a requisição e visualizar a resposta.**

---

Esse README fornece uma base sólida para que os usuários do seu projeto entendam como utilizá-lo e configurá-lo adequadamente. Certifique-se de personalizar conforme necessário e adicionar quaisquer informações adicionais específicas para o seu projeto.

Você

refaça... é Sistema de Usuários e não Gerenciador de Tarefas

ChatGPT

ChatGPT

Entendido! Vamos refazer o `README.md` com o tema de "Sistema de Usuários":

---

## **API SISTEMA DE USUÁRIOS**

**Este é um projeto de API para um sistema de usuários, desenvolvido em Node.js utilizando Express e Sequelize como ORM (Object-Relational Mapping). A API permite operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar usuários em um banco de dados MySQL.**

## **📋 PRÉ-REQUISITOS**

**Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:**

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm) (instalado com o Node.js)
- MySQL ([Download MySQL](https://www.mysql.com/))

## **🔧 INSTALAÇÃO**

### **Clone este repositório:**

```bash
bashCopiar código
git clone https://github.com/seu-usuario/api-sistema-usuarios.git

```

### **Navegue até o diretório do projeto:**

```bash
bashCopiar código
cd api-sistema-usuarios

```

### **Instale as dependências:**

```bash
bashCopiar código
npm install

```

## **🔨 CONFIGURAÇÃO**

**Renomeie o arquivo `.env.example` para `.env` e configure com as informações do seu banco de dados MySQL:**

```makefile
makefileCopiar código
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_de_acesso
DB_NAME=sistema_de_usuarios_development
PORT=3000

```

**Certifique-se de que seu banco de dados MySQL está em execução e que o banco de dados `sistema_de_usuarios_development` está criado.**

## **🚀 EXECUTANDO A APLICAÇÃO**

### **Inicie o servidor:**

```bash
bashCopiar código
npm run dev

```

**O servidor estará rodando na porta 3000. Você poderá acessar a API em `http://localhost:3000/api/usuarios`.**

## **📚 ENDPOINTS DA API**

### **CRIAR UM USUÁRIO**

- **URL:** `/api/usuarios`
- **Método:** `POST`
- **Corpo da Requisição:**

```json
jsonCopiar código
{
  "nome": "Nome do Usuário",
  "email": "email@example.com",
  "senha": "senha_123"
}

```

### **LISTAR TODOS OS USUÁRIOS**

- **URL:** `/api/usuarios`
- **Método:** `GET`

### **OBTER UM USUÁRIO POR ID**

- **URL:** `/api/usuarios/:id`
- **Método:** `GET`

### **ATUALIZAR UM USUÁRIO**

- **URL:** `/api/usuarios/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**

```json
jsonCopiar código
{
  "nome": "Novo Nome do Usuário",
  "email": "novo_email@example.com",
  "senha": "nova_senha_456"
}

```

### **DELETAR UM USUÁRIO**

- **URL:** `/api/usuarios/:id`
- **Método:** `DELETE`

## **🛠 TESTANDO A API**

**Você pode usar ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints da API.**

### **EXEMPLO DE CONFIGURAÇÃO NO INSOMNIA**

1. **Abra o Insomnia e crie uma nova requisição.**
2. **Selecione o método HTTP (GET, POST, PUT, DELETE).**
3. **Insira a URL do endpoint (ex: `http://localhost:3000/api/usuarios`).**
4. **Para requisições POST e PUT, vá para a aba "Body" e selecione "JSON", depois insira o corpo da requisição.**
5. **Clique em "Send" para enviar a requisição e visualizar a resposta.**

---

Esse README fornece uma base sólida para que os usuários do seu projeto entendam como utilizá-lo e configurá-lo adequadamente. Certifique-se de personalizar conforme necessário e adicionar quaisquer informações adicionais específicas para o seu projeto.
