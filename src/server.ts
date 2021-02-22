import express, { response } from "express";

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

 app.get("/", (req, res) => {
     return res.json({message: "Hello World - NLW4"});
 });

 app.post("/", (req, res) => {
    return res.json({message: "Os dados foram salvos com sucesso!"});
 });

app.listen(3333, () => console.log("Server is running!"));