### Dependencias do Projeto

##### Infraestrutura HTTP
``express`` - Framework para gerenciamento de rotas, middlewares, APIs REST.  
``cors`` - Middleware para habilitar CORS (Cross-Origin Resource Sharing) no Express com headers HTTP.  
``express-rate-limit`` Middleware para limitar requisições por IP e evitar ataques DDoS.  

``axios`` – Cliente HTTP baseado em Promises para consumir APIs (retorna dados convertidos em JSON),
permite configurar baseURL, headers e interceptores. Suporta timeouts e cancelamento de requests.  

##### Banco de Dados / ORM

``@prisma/client`` – Cliente tipado gerado pelo Prisma para consultas ao banco.  
``prisma`` – CLI do Prisma (migrações, generate, db seed, etc).  

##### TypeScript / Execução
``typescript`` – Superset de JavaScript que adiciona tipagem estática.  
``ts-node`` – Executa arquivos .ts diretamente no NodeJS sem precisar compilar.  
``tsconfig-paths`` – Resolve automaticamente os paths definidos no tsconfig.json (ex: @utils/*).  
``tsdown`` – Builder rápido para compilar TypeScript (alternativa ao tsc).  

##### Segurança / Autenticação
``jsonwebtoken`` – Emissão e validação de tokens JWT para autenticação/autorização.  
``bcryptjs`` – Hash seguro de senhas (com salt) em JS.  

##### Qualidade de Código / Linting

``eslint`` – Ferramenta de lint para encontrar e corrigir problemas no código.  
``@eslint/js`` – Configurações base do ESLint para projetos JavaScript.  
``@typescript-eslint/parser`` – Parser que permite o ESLint entender código TypeScript.  
``@typescript-eslint/eslint-plugin`` – Conjunto de regras específicas para TypeScript no ESLint.  
``eslint-config-prettier`` – Desativa regras do ESLint que conflitam com o Prettier.  
``eslint-plugin-prettier`` – Roda o Prettier como regra do ESLint (formatar + lint em conjunto).  
``prettier`` – Formatador de código.  
``globals`` – Lista de variáveis globais conhecidas para ajudar o ESLint a evitar falsos positivos.  

##### Utilitários
``dotenv`` – Carrega variáveis do arquivo .env no objeto global process.env do NodeJS.  

<!--
##### Filas e Dashboard
``bullmq`` – Gerenciador de filas distribuídas para tarefas assíncronas (e-mails, processamento de imagem, etc).
``@bull-board/api`` – API do dashboard para monitorar filas/jobs do BullMQ.
``@bull-board/express`` – Integra o dashboard do Bull Board ao Express.
-->
