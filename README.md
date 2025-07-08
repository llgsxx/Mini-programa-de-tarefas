# Aprendendo Node.js — Gerenciador de Tarefas

Um projeto simples de gerenciamento de tarefas no terminal, feito em Node.js. Permite cadastrar, listar e atualizar tarefas, tudo com uma interface interativa no próprio terminal.

## 🚀 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [chalk](https://www.npmjs.com/package/chalk) — para colorir o terminal
- [@clack/prompts](https://www.npmjs.com/package/@clack/prompts) — prompts interativos

## 📦 Estrutura do projeto

Aprendendo node.js/
├── src/
│   ├── index.js                # Ponto de entrada do CLI
│   ├── manager/
│   │   └── tasks.js            # Lógica de manipulação das tarefas
│   └── menus/
│       ├── create.js
│       ├── list.js
│       ├── main.js
│       └── update.js
├── tasks.json                  # Banco de dados local (JSON)
├── package.json
└── package-lock.json

⚙️ Pré-requisitos

Node.js versão 18 ou superior

🛠 Como instalar

git clone https://github.com/seu-usuario/aprendendo-node.git
cd aprendendo-node.js
npm install

▶️ Como usar
No terminal, dentro da pasta do projeto:

npm start
