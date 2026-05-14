import express from "express";
import path from "node:path";

import apiRouter from "./routes/api.routes.js";

import { mcors } from "./middlewares/mcors.middleware.js";
import { debug } from "./middlewares/debug.middlewares.js";

import {
  notFound,
  errorHandler
} from "./middlewares/errors.middleware.js";
const variavelteste = 1;
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));


app.use(express.static(path.join(import.meta.dirname, "../public")));

app.use(mcors);
app.use(express.json());
app.use(debug);

app.use("/api", apiRouter);

app.get("/home", (req, res) => {
  res.render("home");
});


app.use(notFound);
app.use(errorHandler);

export default app;