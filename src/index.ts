import express, { Express, Response, Request } from "express";
import { config } from "dotenv";
config();

console.log("PORT from env ->", process.env.PORT);

const app: Express = express();
const port: string | number = process.env.PORT || 3003;

// Rota simples para teste
app.get("/", (req: Request, res: Response) => {
  res.send({ body: "Hello, TypeScript with Express!" });
});

// Começar instancia de server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app, server };
