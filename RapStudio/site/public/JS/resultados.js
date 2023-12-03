   // Função para criação do gráfico superior esquerda
   function obterDadosGrafico() {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: [
            '0-18 Jovens',
            '19-29 Jovens Adultos',
            '30-59 Adultos',
            '60+ Idosos'
        ],
        datasets: [{
            borderWidth: 0.5,
            label: 'Idade Usuários',
            data: [],
            backgroundColor: [
                '#69140E',
                '#FFF',
                '#66101F',
                '#2E3532',
            ],
            hoverOffset: 4
        }],
        
    };
    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];
    dados.datasets[0].data.push(registro.Jovem);
    dados.datasets[0].data.push(registro.JovemAdulto);
    dados.datasets[0].data.push(registro.Adulto);
    dados.datasets[0].data.push(registro.Idoso);

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'doughnut',
        data: dados,
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 17
                        }
                    }
                }
            }

        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChart`),
        config
    );
}



function obterDadosSegundoGrafico() {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/listarPontos`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarSegundoGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function plotarSegundoGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: ["0-2", "3-4", "5-6", "7-8"],
        datasets: [{
            label: "Quantidade de Notas Quiz",
            backgroundColor: "rgba(94,33,41,0.2)",
            borderColor: "rgba(94,33,41,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(94,33,41,0.4)",
            hoverBorderColor: "rgba(94,33,41,1)",
            data: []
        }]
    };
    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];
    dados.datasets[0].data.push(registro.zeroDois);
    dados.datasets[0].data.push(registro.tresQuatro);
    dados.datasets[0].data.push(registro.cincoSeis);
    dados.datasets[0].data.push(registro.seteOito);

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    stacked: true,
                    grid: {
                        display: true,
                        color: "rgba(94,33,41,0.1)"
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 19
                        }
                    }
                }
            }
        }
    };
    // Adicionando gráfico criado em div na tela
    let chart = new Chart(
        document.getElementById(`chart`),
        config
    );
}





function atualizarLeaderBoard() {
    fetch("/medidas/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var liderScore = document.getElementById("topResultados");
                var mensagem = document.createElement("span");
                liderScore.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var liderScore = document.getElementById("topResultados");

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];
                    
                    // criando e manipulando elementos do HTML via JavaScript
                    var leaderBoard = document.createElement("div");
                    var h1Posit = document.createElement("h1");
                    var pontosUser = document.createElement("h1");


                    h1Posit.innerHTML +=  i+1 + '°  ' + publicacao.nome;
                    pontosUser.innerHTML += publicacao.pontuacao;

                    leaderBoard.className = "leaderBoard";

                    leaderBoard.appendChild(h1Posit);
                    leaderBoard.appendChild(pontosUser);
                    liderScore.appendChild(leaderBoard);
                }

                // finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}
