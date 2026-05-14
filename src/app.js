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

// --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
    res.render("home"); // Renderiza o esqueleto da página
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

  app.get("/products", (req, res) => {
    const products = [
      {id: 1, nome: "Teclado", disponivel: true},
      {id: 2, nome: "Mouse", disponivel: true},
      {id: 3, nome: "Monitor", disponivel: false},
      {id: 4, nome: "Caixa de Som", disponivel: false},
    ];
    res.render("products", {listaProdutos: products});
  });

export default app;