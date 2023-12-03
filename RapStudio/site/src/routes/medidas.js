var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/listar", function (req, res) {
    medidaController.listarUsuarios(req, res);
})

router.get("/listarPontos", function (req, res) {
    medidaController.listarPontuacao(req, res);
})

module.exports = router;