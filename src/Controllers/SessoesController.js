const SessoesModel = require("../Models/SessoesModel");

class SessoesController {
  async create(req, res) {
    const sessao = await SessoesModel.create(req.body);

    return res.status(200).json(sessao);
  }
  async read(req, res) {
    const sessao = await SessoesModel.find();

    return res.status(200).json(sessao);
  }
  async update(req, res) {
    const { id } = req.params;
    const sessao = await SessoesModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(sessao);
  }
  async delete(req, res) {
    const { id } = req.params;
    await SessoesModel.findByIdAndDelete(id);

    return res.status(200).json({ mensagem: "sessao deletada com sucesso" });
  }
}

module.exports = new SessoesController();
