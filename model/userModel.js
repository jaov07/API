import conexao from '../database/conexao.js';

export const inserirUsuario = (nome, estado, callback) => {
    const sql = "INSERT INTO users (nome, estado) VALUES (?, ?)";
    conexao.query(sql, [nome, estado], callback);
};

export const listarUsuarios = (callback) => {
    const sql = "SELECT * FROM users";
    conexao.query(sql, callback);
};

export const buscarUsuarioPorId = (id, callback) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    conexao.query(sql, [id], callback);
};
