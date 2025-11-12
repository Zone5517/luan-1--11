# React User Pagination

Este projeto é uma aplicação React que gerencia a listagem e paginação de usuários. Ele utiliza um contexto global para armazenar e disponibilizar o estado da lista de usuários, a página atual e as informações de paginação.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
react-user-pagination
├── src
│   ├── index.tsx               # Ponto de entrada da aplicação
│   ├── App.tsx                  # Componente principal da aplicação
│   ├── pages
│   │   └── UsersPage.tsx       # Componente que exibe a lista de usuários e a paginação
│   ├── components
│   │   ├── UserList.tsx        # Componente que renderiza a lista de usuários
│   │   └── Pagination.tsx       # Componente que permite a navegação entre páginas
│   ├── context
│   │   ├── UsersContext.tsx     # Contexto que fornece o estado global de usuários
│   │   └── UsersProvider.tsx     # Componente que gerencia o estado global de usuários
│   ├── reducers
│   │   ├── usersReducer.ts      # Lógica do reducer para gerenciar o estado de usuários
│   │   └── usersActions.ts      # Ações que podem ser despachadas para o reducer
│   ├── hooks
│   │   └── useUsers.ts          # Hook personalizado para acessar o contexto de usuários
│   ├── services
│   │   └── api.ts               # Funções para interagir com uma API externa
│   ├── types
│   │   └── index.ts             # Tipos e interfaces utilizados no projeto
│   └── styles
│       └── globals.css          # Estilos globais da aplicação
├── package.json                 # Configuração do npm
├── tsconfig.json                # Configuração do TypeScript
├── .eslintrc.json               # Configurações do ESLint
├── .prettierrc                  # Configurações do Prettier
└── README.md                    # Documentação do projeto
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para iniciar a aplicação, utilize o comando:

```
npm start
```

A aplicação será executada em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.