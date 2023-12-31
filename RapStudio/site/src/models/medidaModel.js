var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select * from vw_idades;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuarios(){
    instrucaoSql = '';

    instrucaoSql = `
        select u.nome as nome, nota as pontuacao from usuario u join resultado on fkUsuario = idUsuario order by nota desc limit 5;
    `;
    return database.executar(instrucaoSql);
}

function listarPontuacao(){
    instrucaoSql = '';

    instrucaoSql = `
        select count(*) as zeroDois, (select count(*) from Resultado where nota >= 3 and nota <=4) as tresQuatro, (select count(*) from Resultado where nota >= 5 and nota <= 6) as cincoSeis, (select count(*) from Resultado where nota >= 7) as seteOito from Resultado where nota <= 2;
    `;
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    listarUsuarios,
    listarPontuacao
}
