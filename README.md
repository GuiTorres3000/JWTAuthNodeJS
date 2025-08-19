### Dependencias do Projeto

##### Infraestrutura HTTP
``express`` - Framework para gerenciamento de rotas, middlewares, APIs REST
``cors`` - Middleware para habilitar CORS (Cross-Origin Resource Sharing) no Express com headers HTTP.
``express-rate-limit`` Middleware para limitar requisições por IP e evitar ataques DDoS.

``axios`` – Cliente HTTP baseado em Promises para consumir APIs (retorna dados convertidos em JSON),
permite configurar baseURL, headers e interceptores. Suporta timeouts e cancelamento de requests.

##### Banco de Dados / ORM

``@prisma/client`` – Cliente tipado gerado pelo Prisma para consultas ao banco.
``prisma`` – CLI do Prisma (migrações, generate, db seed, etc.).

##### Filas e Dashboard
``bullmq`` – Gerenciador de filas distribuídas para tarefas assíncronas (e-mails, processamento de imagem, etc).
``@bull-board/api`` – API do dashboard para monitorar filas/jobs do BullMQ.
``@bull-board/express`` – Integra o dashboard do Bull Board ao Express.

##### Segurança / Autenticação
``jsonwebtoken`` – Emissão e validação de tokens JWT para autenticação/autorização.
``bcryptjs`` – Hash seguro de senhas (com salt) em JS.

##### TS
``ts-node`` - Rodar Typescript em NodeJS sem precisar compilar antes.

##### Utilitários
``dotenv`` – Carrega variáveis do arquivo .env no objeto global process.env do NodeJS.
