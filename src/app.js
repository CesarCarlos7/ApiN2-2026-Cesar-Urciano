import express from "express";

import apiRouter from "./routes/api.routes.js";

import { mcors } from "./middlewares/mcors.middleware.js";
import { debug } from "./middlewares/debug.middlewares.js";

import {
  notFound,
  errorHandler
} from "./middlewares/errors.middleware.js";

const app = express();

app.use(mcors);
app.use(express.json());
app.use(debug);

app.use("/api", apiRouter);

app.use(notFound);
app.use(errorHandler);

export default app;