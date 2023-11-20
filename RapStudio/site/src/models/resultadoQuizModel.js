var database = require("../database/config")

function pontuacao(pontuacaoU, idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pontuacao(): ", pontuacaoU)
    var instrucao = `
        insert into Resultado (fkUsuario, fkQuizMusica, Nota) values ('${idUsuario}','1','${pontuacaoU}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    pontuacao
};