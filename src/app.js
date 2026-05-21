import express from "express";
import path from "node:path";

import apiRouter from "./routes/api.routes.js";

import { mcors } from "./middlewares/mcors.middleware.js";
import { debug } from "./middlewares/debug.middlewares.js";

import {
  notFound,
  errorHandler
} from "./middlewares/errors.middleware.js";

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));


app.use(express.static(path.join(import.meta.dirname, "../public")));

app.use(mcors);
app.use(express.json());
app.use(debug);

app.use("/api", apiRouter);


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
    const products = [
      {id: 1, nome: "Degradê", disponivel: true},
      {id: 2, nome: "Social", disponivel: true},
      {id: 3, nome: "Platinado", disponivel: false},
      {id: 4, nome: "Barba", disponivel: false},
    ];
    res.render("products", {listaProdutos: products});
  });

app.use(notFound);
app.use(errorHandler);


  export default app;