// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = `
        <a> Olá ${nome}</a>
        `;
        c_usuario.innerHTML = `<li><i class="fa-solid fa-arrow-right-from-bracket" style="cursor: pointer;" onclick="limparSessao()"></i></li> `
        a_recomendacao.href = "recomendacao.html"
    }
}

function validarSessaoInteracao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        window.location = "acerteSom.html";    
    }
    else {
         window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    b_usuario.innerHTML = `
        <li><a href="cadastro.html"> Cadastrar </a></li>
     `;
    c_usuario.innerHTML = `
        <div class="btn-entrar">
            <li><a href="login.html"> Entrar </a></li>
        </div>
    `

    // window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

