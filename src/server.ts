import express, { Express, Response, Request } from "express";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

// Rota simples para teste
app.get("/", (req: Request, res: Response) => {
  res.send({ body: "Hello, TypeScript with Express!" });
});

// Começar instancia de server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export both the app and the server for testing later
export { app, server };
