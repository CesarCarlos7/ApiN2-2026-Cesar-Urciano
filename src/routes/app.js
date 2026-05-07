import express from "express";

import apiRouter from "./routes/api.routes.js";

import { debug } from "./middlewares/debug.middleware.js";

import {
  notFound,
  errorHandler
} from "./middlewares/errors.middleware.js";

import cors from "./middlewares/cors.middleware.js";

const app = express();

// Middlewares
app.use(cors);
app.use(express.json());
app.use(debug);

// Rotas
app.use("/api", apiRouter);

// Tratamento de rota inexistente
app.use(notFound);

// Middleware de erro
app.use(errorHandler);

export default app;