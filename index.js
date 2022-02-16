const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDodia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(3000, () => {
    console.log('Servidor node iniciado em: ' + data);
});