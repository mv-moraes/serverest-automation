# Projeto de Automação - ServeRest

Projeto de automação frontend e API utilizando Cypress.

## Autor
Marcos Moraes

## Tecnologias utilizadas

- Cypress
- JavaScript
- Faker

## Estrutura do projeto

```txt
cypress/
├── e2e/
│   ├── frontend/
│   └── api/
├── fixtures/
└── support/
```

## Cenários automatizados

### Frontend
- Cadastro de usuário
- Login com sucesso
- Login inválido
- Adicionar produto à lista

### API
- Cadastro de usuário
- Login
- Cadastro de produto autenticado

## Como executar

Instalar dependências:

```bash
npm install
```

Executar interface do Cypress:

```bash
npx cypress open
```

Executar testes em modo headless:

```bash
npx cypress run
```

## Observações

Os testes utilizam massa dinâmica com Faker para evitar dependência de dados fixos e garantir independência entre execuções.