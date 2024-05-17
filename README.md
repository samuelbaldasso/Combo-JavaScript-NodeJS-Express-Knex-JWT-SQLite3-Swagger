# Backend para Restaurantes com Autenticação JWT e Autorização por Roles

Este projeto é um backend para um sistema de restaurantes. Ele oferece funcionalidades como autenticação e autorização de usuários, utilizando tokens JWT (JSON Web Tokens) e um sistema de roles. O backend é construído em Node.js, com o uso do KnexJS para interagir com o banco de dados SQLite.

## Recursos

- **Autenticação de Usuário**: Sistema de login e registro de usuários.
- **Autorização via JWT**: Após o login, os usuários recebem um token JWT para acessos subsequentes.
- **Gerenciamento de Restaurante**: Funcionalidades para adicionar, visualizar, editar e deletar itens do menu, gerenciar pedidos e controlar reservas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do servidor.
- **Express.js**: Framework para o servidor Node.js.
- **KnexJS**: Construtor de consultas SQL para interagir com o banco de dados SQLite.
- **SQLite**: Banco de dados leve e eficiente para armazenar os dados dos usuários e informações do restaurante.
- **JWT (JSON Web Tokens)**: Utilizado para a autenticação e autorização de usuários com base em roles.

## Instruções de Instalação e Uso

1. Clone o repositório: `git clone [URL_DO_REPOSITORIO]`.

2. Navegue até a pasta do projeto e instale as dependências: `cd [NOME_DA_PASTA_DO_PROJETO]` e depois rodar o comando `npm install`.

3. Inicie o servidor: `nodemon server.js`.

4. Acesse `http://localhost:3001/api-docs` em seu navegador para visualizar a documentação da API.

---

Desenvolvido com ❤️ por Samuel Baldasso
