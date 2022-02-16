let dados = require('./dados');

function retornarMensagemDodia(dia){
    return dados.frases[dia -1];
}

exports.retornarMensagemDodia = retornarMensagemDodia;