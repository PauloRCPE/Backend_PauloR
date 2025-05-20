const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: String,
  senha: String,
  nome: String,
  status: String,
  cargo: String,
});

const UsuarioModel = new mongoose.model("usuarios", UsuarioSchema);

module.exports = UsuarioModel;
