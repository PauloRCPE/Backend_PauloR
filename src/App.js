const express = require("express");
const rotas = require("./Routes/Routes");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(rotas);
app.use((req, res) => {
  res.status(404).json({ message: `Route '${req.originalUrl}' não encontrada` });
});

module.exports = app;
