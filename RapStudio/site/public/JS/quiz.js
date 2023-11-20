var pontuacao = 0;
var respostas = [];
var questoesCertas = [1, 1, 1, 1, 1, 1, 1, 1];
var quest = 0
var proximaQuestao =[`  <p>Pergunta 2</p>
                        <audio controls="controls" loop="loop" src="assets/Questao2.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaV(), cor()" id="q3">Rap É Compromisso - Sabotage</button>
                            <button onclick="respostaE(), cor() " id="q1">A Vida é Desafio - Racionais MCs</button>
                            <button onclick="respostaE(), cor() " id="q2">Mun Rá - Sabotage</button>
                            <button onclick="respostaE(), cor() " id="q4">Soldado Do Morro - MV Bill</button>
                        </div>`,
                        `<p>Pergunta 3</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao3.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaE(), cor() " id="q1">Favela Sinistra - Trilha Sonora do Gueto</button>
                            <button onclick="respostaE(), cor() " id="q4">Vida Loka, Pt 1 - Racionais MC's</button>
                            <button onclick="respostaE(), cor() " id="q2">That's My Way - Edi Rock</button>
                            <button onclick="respostaV(), cor()" id="q3">Capítulo 4 Versículo 3 - Racionais MC's</button>
                        </div>`,
                        `<p>Pergunta 4</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao4.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaE(), cor() " id="q1">Eu Sou 157 - Racionais MC's</button>
                            <button onclick="respostaV(), cor()" id="q3">Oitavo Anjo - 509-E </button>
                            <button onclick="respostaE(), cor() " id="q2">Me Faça Forte - Dexter</button>
                            <button onclick="respostaE(), cor() " id="q4">Só Deus Pode Me Julgar — MV Bill</button>
                        </div>`,
                        `<p>Pergunta 5</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao5.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaE(), cor() " id="q1">Junho de 94 - Djonga</button>
                            <button onclick="respostaE(), cor() " id="q2">Pseudosocial - Froid</button>
                            <button onclick="respostaV(), cor()" id="q3">Lamentável pt.3 - Froid</button>
                            <button onclick="respostaE(), cor() " id="q4">Lágrimas de Crocodilo - Wiu</button>
                        </div>`,
                        `<p>Pergunta 6</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao6.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaE(), cor() " id="q1">Mlks de Sp - Recayd Mob</button>
                            <button onclick="respostaE(), cor() " id="q2">Japão - Mc Igu</button>
                            <button onclick="respostaE(), cor() " id="q4">Nei Sei - Derek</button>
                            <button onclick="respostaV(), cor()" id="q3">Plaqtudum - Recayd Mob</button>
                        </div>`,
                        `<p>Pergunta 7</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao7.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaE(), cor() " id="q1">Cartão Black - KayBlack</button>
                            <button onclick="respostaV(), cor()" id="q3">Conexões de Máfia - Matuê</button>
                            <button onclick="respostaE(), cor() " id="q2">Engana Dizendo Que Ama - Veigh</button>
                            <button onclick="respostaE(), cor() " id="q4">Mesma História - Orochi</button>
                        </div>`,
                        `<p>Pergunta 8</p>
                        <audio controls="controls" loop="loop"  src="assets/Questao8.mp4"></audio>
                        <div class="botoesResposta">
                            <button onclick="respostaV(), cor()" id="q3">O Mundo É Nosso - Djonga</button>
                            <button onclick="respostaE(), cor() " id="q1">Icarus - BK</button>
                            <button onclick="respostaE(), cor() " id="q2">20 Ligações - Baco Exu do Blues</button>
                            <button onclick="respostaE(), cor() " id="q4">Bala - Froid</button>
                        </div>`,
                    ]


function respostaE() {
    respostas.push(0);
}

function respostaV() {
    respostas.push(1);
    pontuacao += 1;
}

function botao(){
    q1.disabled = true;
    q1.style.color = "black";
    q2.disabled = true;
    q2.style.color = "black";
    q3.disabled = true;
    q3.style.color = "black";
    q4.disabled = true;
    q4.style.color = "black";

    setTimeout(
            ()=>{
                MudarQuestao.innerHTML = proximaQuestao[quest]; 
                quest++;    
                }
            , 1000
        ) 
    }


function cor(){
    q4.style.backgroundColor = "red";

    q2.style.backgroundColor = "red";
    
    q1.style.backgroundColor = "red";
    
    q3.style.backgroundColor = "green";
   
    botao();
}

