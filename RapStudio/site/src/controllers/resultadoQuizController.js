var resultadoQuizModel = require("../models/resultadoQuizModel");

function pontuacao(req,res){
    var pontuacaoU = req.body.pontuacaoServer
    var idUsuario = req.body.idUsuarioServer;
    resultadoQuizModel.pontuacao(pontuacaoU, idUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    pontuacao
}