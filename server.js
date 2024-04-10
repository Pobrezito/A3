const express = require('express');
const app = express();
const port = 3000

function criarUsuario(body) {
    //logica para criação de usuarios no banco de dados
    return { nome: body.name, id: 1 }
}

app.post('/users', (req, res) => {
    //logica para cirar usuario
    const usuario = criarUsuario(req.body);

    res.json(usuario);
});

app.listen(port, () => {
    console.log(`Servidor Rodando`);
});


module.exports = { criarUsuario}
