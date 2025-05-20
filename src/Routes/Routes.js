const { Router } = require("express");
const UsuarioController = require("../Controllers/UsuarioController");
const SessoesController = require("../Controllers/SessoesController");

const rotas = Router();

rotas.post("/usuarios", UsuarioController.create);
rotas.get("/usuarios", UsuarioController.read);
rotas.put("/usuarios/:id", UsuarioController.update);
rotas.delete("/usuarios/:id", UsuarioController.delete);

rotas.post("/sessoes", SessoesController.create);
rotas.get("/sessoes", SessoesController.read);
rotas.put("/sessoes/:id", SessoesController.update);
rotas.delete("/sessoes/:id", SessoesController.delete);

module.exports = rotas;
