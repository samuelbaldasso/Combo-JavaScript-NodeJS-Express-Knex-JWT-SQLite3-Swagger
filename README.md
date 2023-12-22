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

## Documentação da API

A documentação completa das API's está disponível no endpoint `/api-docs`. A documentação é interativa e permite testar os endpoints diretamente pela interface do Swagger.

---

Desenvolvido com ❤️ por Samuel Baldasso

PS: O projeto estará também em ambiente de produção no link abaixo:

https://food-explorer-nodejs.onrender.com
