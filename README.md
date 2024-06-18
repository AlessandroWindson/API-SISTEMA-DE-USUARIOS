# **API - SISTEMA DE USUÁRIOS**

Este README detalha o projeto da API para um sistema de usuários. O projeto foi desenvolvido em Node.js utilizando o Express e o Sequelize como ORM (Object-Relational Mapping). A API permite operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar usuários em um banco de dados MySQL.

## **📋 PRÉ-REQUISITOS**

Para começar a usar esta API, é fundamental que você tenha um ambiente de desenvolvimento configurado. Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**: É uma plataforma JavaScript usada para construir o servidor. Node.js é um ambiente de execução JavaScript no lado do servidor que permite aos desenvolvedores criar aplicativos web escaláveis. [Download Node.js](https://nodejs.org/en/)
- **NPM (Node Package Manager)**: É um gerenciador de pacotes para Node.js. Ele permite que os usuários instalem e atualizem suas dependências de projeto. [Download NPM](https://www.npmjs.com/get-npm)
- **Express**: É um Framework web para Node.js. Ele simplifica o desenvolvimento de aplicativos web ao fornecer uma série de recursos pré-construídos. [Download Express](https://expressjs.com/)
- **Sequelize**: É um ORM (Object-Relational Mapping) para Node.js. Ele fornece uma maneira de interagir com bancos de dados SQL como MySQL, PostgreSQL, SQLite, etc., usando JavaScript. [Download Sequelize](https://sequelize.org/)
- **MySQL**: É um sistema de banco de dados relacional. MySQL é uma das opções mais populares para bancos de dados relacionais, que podem ser gerenciados usando SQL (Structured Query Language). [Download MySQL](https://www.mysql.com/)

## **🔧 INSTALAÇÃO**

A instalação é um processo crucial antes de começar a usar a API. Siga as instruções abaixo para instalar:

1. **Clone o repositório em seu sistema local:**

```bash
git clone <https://github.com/seu-usuario/api-sistema-usuarios.git>
cd api-sistema-usuarios

```

1. **Instale todas as dependências necessárias:**

```bash
npm install

```

## **⚙️ CONFIGURAÇÃO**

Configurar a API corretamente é essencial para garantir que ela funcione como esperado. Siga as etapas abaixo para configurar a API:

1. **Renomeie o arquivo `.env.example` para `.env` e preencha as informações do seu banco de dados MySQL:**

```
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_de_acesso
DB_NAME=sistema_de_usuarios_development
PORT=3000

```

1. **Certifique-se de que seu servidor MySQL está em execução e que o banco de dados `sistema_de_usuarios_development` foi criado.**

## **🚀 EXECUTANDO A APLICAÇÃO**

Agora que a API está instalada e configurada corretamente, você está pronto para executar a aplicação. Siga as instruções abaixo:

1. **Inicie o servidor com o seguinte comando:**

```bash
npm run dev

```

1. **O servidor estará rodando na porta 3000. Você pode acessar a API em `http://localhost:3000/api/usuarios`.**

## **📚 ENDPOINTS DA API**

A API fornece os seguintes endpoints:

- **Criar um usuário**
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

- **Listar todos os usuários**
    - **URL:** `/api/usuarios`
    - **Método:** `GET`
- **Obter um usuário por ID**
    - **URL:** `/api/usuarios/:id`
    - **Método:** `GET`
- **Atualizar um usuário**
    - **URL:** `/api/usuarios/:id`
    - **Método:** `PUT`
    - **Corpo da Requisição:**

```json
{
  "nome": "Novo Nome do Usuário",
  "email": "novo_email@example.com",
  "senha": "nova_senha_456"
}

```

- **Deletar um usuário**
    - **URL:** `/api/usuarios/:id`
    - **Método:** `DELETE`

## **🛠 TESTANDO A API**

Testar a API é uma parte crucial do desenvolvimento. Recomendamos o uso de ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints da API.

**Exemplo de Configuração no Insomnia**

1. Abra o Insomnia e crie uma nova requisição.
2. Selecione o método HTTP (GET, POST, PUT, DELETE).
3. Insira a URL do endpoint (por exemplo, `http://localhost:3000/api/usuarios`).
4. Para requisições POST e PUT, vá para a aba "Body", selecione "JSON" e insira o corpo da requisição.
5. Clique em "Send" para enviar a requisição e visualizar a resposta.

Este README fornece informações detalhadas para que os usuários do projeto entendam como utilizá-lo e configurá-lo adequadamente. Personalize conforme necessário e adicione quaisquer informações adicionais específicas para o seu projeto.
