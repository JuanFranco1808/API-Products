//Librerias externas
require("dotenv").config();
const express = require("express");
const chalk = require("chalk");

//Modulos internos/funciones importadas
const { readFile } = require("./src/files");

//Variables globales
const app = express();
const FILE_NAME = "./db/products.JSON";
const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Motor de plantillas EJS
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/products", (req, res) => {
  const data = readFile(FILE_NAME);
  res.render("index", { products: data, count: 1 });
  res.send(data);
});

app.listen(PORT, () => {
  console.log(
    chalk.green(`${APP_NAME} is running on http://localhost:${PORT}/products`)
  );
});
