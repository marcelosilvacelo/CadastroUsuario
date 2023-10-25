const mongoose = require("mongoose");

const Usuarios = mongoose.model("Usuarios", {
  nome: String,
  nascimento: Number,
  cpf: Number,
});

module.exports = Usuarios;
