function limparFormulario() {
    document.getElementById("form_postagem").reset();
}

var idUsuario = sessionStorage.ID_USUARIO;
 function publicar() {

    var corpo = {
        Musica: form_postagem.musica.value,
        Artista: form_postagem.textarea_Artista.value
    }

    fetch(`/avisos/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // window.location = "recomendacao.html";
            atualizarFeed()
            limparFormulario();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function atualizarFeed() {
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";
                for (let i = resposta.length - 1; i >= 0; i--) {
                    var publicacao = resposta[i];

                    if(publicacao.idUsuario == idUsuario){
                        form_postagem.style.display = 'none'
                    }

                    // criando e manipulando elementos do HTML via JavaScript
                    var RecomendacaoUsuario = document.createElement("div");
                    var pUser = document.createElement("p");
                    var pMusc = document.createElement("p");


                    pUser.innerHTML =  publicacao.nome;
                    pMusc.innerHTML =    publicacao.Musica + " - " + publicacao.Artista;

                    RecomendacaoUsuario.className = "RecomendacaoUsuario";
                    pUser.className = "Musica";



                    RecomendacaoUsuario.appendChild(pUser);
                    RecomendacaoUsuario.appendChild(pMusc);
                    feed.appendChild(RecomendacaoUsuario);
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