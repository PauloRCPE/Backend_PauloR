const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "o nome é obrigatório" }),
    email: z
      .string({ required_error: "o email é obrigatório" })
      .email({ required_error: "email inválido" }),
    senha: z.string({ required_error: "a senha é obrigatório" }),
    status: z.string({ required_error: "o status é obrigatório" }),
    cargo: z.string({ required_error: "o cargo é obrigatório" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID não é válido"),
  }),
});
module.exports = { create, destroy };
