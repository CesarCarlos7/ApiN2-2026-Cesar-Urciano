import express from "express";
import path from "node:path";

import { mcors } from "./middlewares/mcors.middleware.js";
import { debug } from "./middlewares/debug.middlewares.js";

import { notFound, errorHandler } from "./middlewares/errors.middleware.js";

import apiRouter from "./routes/api.routes.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.static(path.join(import.meta.dirname, "../public")));

app.use(mcors);
app.use(express.json());
app.use(debug);

app.use("/api", apiRouter);
app.use("/api", productsRouter);

// --- ROTAS DE VIEW (EJS) ---
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/products", (req, res) => {
  res.render("products");
});

app.use(notFound);
app.use(errorHandler);

export default app;