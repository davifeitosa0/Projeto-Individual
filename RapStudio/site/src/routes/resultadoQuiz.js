var express = require("express");
var router = express.Router();

var resultadoQuizController = require("../controllers/resultadoQuizController");


router.post("/pontuacaoTeste", function (req, res) {
    resultadoQuizController.pontuacao(req, res);
});

module.exports = router;