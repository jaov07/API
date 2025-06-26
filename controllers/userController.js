import { inserirUsuario, listarUsuarios, buscarUsuarioPorId } from '../model/userModel.js';

export const postUsuario = (req, res) => {
    const { nome, estado } = req.body;
    inserirUsuario(nome, estado, (err, results) => {
        if (err) return res.status(500).send("Erro ao inserir usuário");
        res.status(201).json({ id: results.insertId, nome, estado });
    });
};

export const getUsuarios = (req, res) => {
    listarUsuarios((err, results) => {
        if (err) return res.status(500).send("Erro ao listar usuários");
        res.status(200).json(results);
    });
};

export const getUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);
    buscarUsuarioPorId(id, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar usuário por ID");
        if (results.length === 0) return res.status(404).send("Usuário não encontrado");
        res.status(200).json(results[0]);
    });
};
