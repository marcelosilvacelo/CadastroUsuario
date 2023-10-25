const router = require("express").Router();
const Usuarios = require("../model/usuarios.js");
//CADASTRAR
router.post("/", async (req, res) => {
  const { nome, nascimento, cpf } = req.body;
  if (!nome) {
    res.status(422).json({ error: "Nome Obrigatorio" });
    return;
  }
  const usuario = {
    nome,
    nascimento,
    cpf,
  };
  try {
    await Usuarios.create(usuario);
    res.status(201).json({ message: "Usuario Criado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//BUSCA TODOS
router.get("/", async (req, res) => {
  try {
    const usuario = await Usuarios.find();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});
//BUSCAR POR ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await Usuarios.findOne({ _id: id });
    if (!usuario) {
      res.status(422).json({ message: "Usuario não encontrado" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//ROTA PARA ATUALIZAR
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { nome, nascimento, cpf } = req.body;
  const usuario = {
    nome,
    nascimento,
    cpf,
  };
  try {
    const updateUsuario = await Usuarios.updateOne({ _id: id }, usuario);
    if (updateUsuario.matchedCount === 0) {
      res.status(500).json({ message: "usuario não foi atualizado" });
      console.log(updateUsuario);
      return;
    }
    res.status(200).json({ message: "Alterado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//ROTA DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const usuario = await Usuarios.findOne({ _id: id });
  if (!usuario) {
    res.status(422).json({ message: "O Usuario não existe" });
    return;
  }
  try {
    await Usuarios.deleteOne({ _id: id });
    res.status(200).json({ message: "Usuario removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
module.exports = router;
